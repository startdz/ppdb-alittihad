type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-lg text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
