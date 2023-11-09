type UiTextProps = {
  children: React.ReactNode;
};

export function UiText({ children }: UiTextProps) {
  return <p className="text-left tracking-wide">{children}</p>;
}
