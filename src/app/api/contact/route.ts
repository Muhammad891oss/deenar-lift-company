import { NextResponse } from "next/server";
import fs from "fs";
import os from "os";
import path from "path";

export const runtime = "nodejs";

interface Enquiry {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function resolveDocumentsDir(): string {
  const home = os.homedir();
  const candidates = [
    path.join(home, "Documents"),
    path.join(home, "OneDrive", "Documents"),
    home,
  ];
  return candidates.find((dir) => fs.existsSync(dir)) ?? home;
}

const clean = (value: string | undefined, max = 500) =>
  (value ?? "").trim().replace(/\s+/g, " ").slice(0, max);

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);

  if (!name || !phone || !message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const now = new Date();
  const stamp = now.toLocaleString("en-PK", { hour12: false });

  const entry = [
    "================================================",
    `Date:   ${stamp}`,
    `Name:   ${name}`,
    `Phone:  ${phone}`,
    email ? `Email:  ${email}` : "",
    subject ? `Subject: ${subject}` : "",
    "",
    `Message: ${message}`,
    "",
  ]
    .filter(Boolean)
    .join("\n");

  const fileName = `Deenar-Lift-Enquiries-${now.getFullYear()}.txt`;
  const documentsDir = await resolveDocumentsDir();
  const filePath = path.join(documentsDir, fileName);

  try {
    await fs.promises.appendFile(filePath, `${entry}\n`, "utf8");
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true, file: filePath });
}
