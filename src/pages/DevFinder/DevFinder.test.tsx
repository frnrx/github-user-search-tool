import { fireEvent, screen } from "@testing-library/react";
import DevFinder from ".";
import render from "../../utils/customTestingRender";
import * as fetchUser from "./fetchUser";

jest.spyOn(fetchUser, "default");

describe("DevFinder", () => {
  it("should fetchUser with frnrx on the first load", () => {
    render(<DevFinder />);

    expect(fetchUser.default).toBeCalledWith("frnrx");
  });

  it("should call fetchUser when the user searches for a new username", () => {
    render(<DevFinder />);

    fireEvent.change(screen.getByRole("textbox", { name: "username" }), {
      target: { value: "octocat" },
    });
    fireEvent.click(screen.getByText("Search"));
    expect(fetchUser.default).toBeCalledWith("octocat");
  });
});
