import { cleanup, getByTestId, render } from "@testing-library/react";
import Socials from "./Socials";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("<Socials/>", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders socials", () => {
    const { getByTestId } = render(<Socials />);
    const socials = getByTestId("socials");
    expect(socials).toBeInTheDocument();
  });

  it("renders a link to linkedin", () => {
    const { getByTestId } = render(<Socials />);
    const linkedin = getByTestId("linkedin");

    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/nicbritz/"
    );
    expect(linkedin).toHaveAttribute("target", "_blank");
  });

  it("renders a link to github", () => {
    const { getByTestId } = render(<Socials />);
    const github = getByTestId("github");

    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", "https://github.com/NicBritz");
    expect(github).toHaveAttribute("target", "_blank");
  });

  it("renders a link to mail", () => {
    const { getByTestId } = render(<Socials />);
    const mail = getByTestId("mail");

    expect(mail).toBeInTheDocument();
    expect(mail).toHaveAttribute("href", "mailto:nico.britz@dark-light.tech");
    expect(mail).toHaveAttribute("target", "_blank");
  });

  it("should have no a11y violations", async () => {
    const render = () => "<Socials />";
    const html = render();

    expect(await axe(html)).toHaveNoViolations();
  });
});
