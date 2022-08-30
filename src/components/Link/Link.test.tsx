import { screen } from "@testing-library/react";
import Link from ".";
import render from "../../utils/customTestingRender";

describe("Link", () => {
  it("should render an <a> when a link prop is provided", () => {
    render(<Link text="test link" link="https://github.com/github" />);

    expect(screen.getByRole("link", { name: "test link" })).toHaveAttribute(
      "href",
      "https://github.com/github"
    );
  });

  it("should not render an link when the link prop is not provided", () => {
    render(<Link text="test link" />);

    expect(screen.queryByRole("link", { name: /test link/i })).toBe(null);
    screen.getByText("test link");
  });

  it("should render an icon when the icon prop is provided", () => {
    render(<Link text="test link" icon="company" />);

    screen.getByText("icon-company.svg");
  });
});
