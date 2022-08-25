import { fireEvent, screen } from "@testing-library/react";
import render from "../../utils/customTestingRender";

describe("ThemeProvider", () => {
  it("should render the app title", () => {
    render(<div>page</div>);

    screen.getByText("devfinder");
  });

  it("should render the app correcly the children component", () => {
    render(<div>page</div>);

    screen.getByText("page");
  });

  it("should render the theme toggle in light mode as default", () => {
    render(<div>page</div>);

    screen.getByText("light");
    screen.getByText("icon-sun.svg");
  });

  it("should toggle correctly the theme when the user clicks the button", () => {
    render(<div>page</div>);

    screen.getByText("light");
    screen.getByText("icon-sun.svg");

    const themeToggleButton = screen.getByRole("button");

    fireEvent.click(themeToggleButton);

    screen.getByText("dark");
    screen.getByText("icon-moon.svg");
  });
});
