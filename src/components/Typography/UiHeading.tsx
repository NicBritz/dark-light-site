type UiHeadingProps = {
  children: React.ReactNode;
};

export function UiHeading({ children }: UiHeadingProps) {
  return <h1 className="text-5xl font-bold">{children}</h1>;
}
