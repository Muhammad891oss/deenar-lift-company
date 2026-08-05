interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-brand-500" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
