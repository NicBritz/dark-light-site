type HeadingProps = {
  title: string;
  subtitle: string;
};

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="text-center mb-12 space-y-5">
      <h1 className="uppercase text-6xl font-bold">{title}</h1>
      <p className="opacity-70">{subtitle}</p>
    </div>
  );
}
