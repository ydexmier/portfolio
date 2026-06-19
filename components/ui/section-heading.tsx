export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{number}</span>
        <h2 className="font-serif-display text-3xl font-medium tracking-tight">{title}</h2>
        <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
      </div>
      {description ? <p className="mt-4 max-w-lg text-sm text-muted">{description}</p> : null}
    </div>
  );
}
