import { fireEvent, screen } from "@testing-library/react";
import render from "../../utils/customTestingRender";
import SearchBar from ".";

const handleSearch = jest.fn(() => {});

describe("SearchBar", () => {
  it("should render all the search bar components correctly", () => {
    render(<SearchBar handleSearch={handleSearch} />);

    screen.getByText("icon-search.svg");
    screen.getByRole("textbox", { name: "username" });
    screen.getByText("Search");
  });

  it("should call the search function when the user clicks the search button", () => {
    render(<SearchBar handleSearch={handleSearch} />);

    fireEvent.change(screen.getByRole("textbox", { name: "username" }), {
      target: { value: "johndoe" },
    });
    expect(handleSearch).not.toBeCalled();
    fireEvent.click(screen.getByText("Search"));
    expect(handleSearch).toBeCalledWith("johndoe");
  });

  it("should show an error message when there is an error", () => {
    render(<SearchBar handleSearch={handleSearch} error />);

    screen.getByText("No results");
  });
});
