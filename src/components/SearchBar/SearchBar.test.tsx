import { fireEvent, screen } from "@testing-library/react";
import render from "../../utils/customTestingRender";
import SearchBar from ".";

const handleSearch = jest.fn(() => {});

describe("SearchBar", () => {
  it("should render all the search bar components correctly", () => {
    render(<SearchBar handleSearch={handleSearch} loading={false} />);

    screen.getByText("icon-search.svg");
    screen.getByRole("textbox", { name: "username" });
    screen.getByText("Search");
  });

  it("should call the search function when the user clicks the search button", () => {
    render(<SearchBar handleSearch={handleSearch} loading={false} />);

    fireEvent.change(screen.getByRole("textbox", { name: "username" }), {
      target: { value: "johndoe" },
    });
    expect(handleSearch).not.toBeCalled();
    fireEvent.click(screen.getByText("Search"));
    expect(handleSearch).toBeCalledWith("johndoe");
  });

  it("should show an error message when there is an error", () => {
    render(<SearchBar handleSearch={handleSearch} error loading={false} />);

    screen.getByText("No results");
  });

  it("should show the loading message when the app is loading", () => {
    render(<SearchBar handleSearch={handleSearch} error loading />);

    screen.getByText("Loading...");
  });
});
