import { cleanup, render } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Home Page", () => {
  beforeEach(() => {
    cleanup();
  });

  it("has a heading", () => {
    const { getByRole } = render(<Home />);
    const heading = getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Hello there");
  });

  it("has paragraphs", () => {
    const { getByText } = render(<Home />);
    const paragraph1 = getByText(/For as long as I can remember,/i);
    const paragraph2 = getByText(
      /Nowadays, I am proud to be a Full-stack developer,/i
    );

    expect(paragraph2).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
  });

  it("renders socials", () => {
    const { getByTestId } = render(<Home />);
    const socials = getByTestId("socials");
    expect(socials).toBeInTheDocument();
  });

  it("renders a link button to portfolio", () => {
    const { getByText } = render(<Home />);
    const button = getByText(/explore my work/i);

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/portfolio");
  });

  it("should have no a11y violations", async () => {
    const render = () => "<Home />";
    const html = render();

    expect(await axe(html)).toHaveNoViolations();
  });
});
