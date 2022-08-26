import { screen } from "@testing-library/react";
import render from "../../utils/customTestingRender";
import user from "../../mocks/user-mock.json";
import UserCard from ".";

describe("UserCard", () => {
  it("should render the users basic information", () => {
    render(<UserCard user={user} />);

    screen.getByText("The Octocat");
    screen.getByText("@octocat");
    screen.getByAltText("octocat avatar");
    screen.getByText("Joined 25 Jan 2011");
    screen.getByText("This is a bio");
  });

  it("should render username instead of the name if the user hasn't added their name", () => {
    const namelessUser = { ...user, name: null };
    render(<UserCard user={namelessUser} />);

    screen.getByText("octocat");
    screen.getByText("@octocat");
  });

  it("should render repositories and followers information", () => {
    render(<UserCard user={user} />);

    screen.getByText("Repos");
    screen.getByText("8");
    screen.getByText("Followers");
    screen.getByText("6688");
    screen.getByText("Following");
    screen.getByText("9");
  });

  it("should render users personal links", () => {
    render(<UserCard user={user} />);

    screen.getByText("icon-location.svg");
    screen.getByText("San Francisco");

    expect(
      screen.getByRole("link", { name: "icon-website.svg https://github.blog" })
    ).toHaveAttribute("href", "https://github.blog");

    expect(
      screen.getByRole("link", { name: "icon-twitter.svg johndoe" })
    ).toHaveAttribute("href", "https://twitter.com/johndoe");

    expect(
      screen.getByRole("link", { name: "icon-company.svg @github" })
    ).toHaveAttribute("href", "https://github.com/github");
  });

  it("should render a filler text if the user has no bio", () => {
    const userWithNoBio = { ...user, bio: null };
    render(<UserCard user={userWithNoBio} />);

    screen.getByText("This profile has no bio");
  });

  it("should render a filler text when any of the personal links are not provided", () => {
    const userWithNoPersonalLinks = {
      ...user,
      twitter_username: null,
      location: null,
      company: null,
      blog: null,
    };
    render(<UserCard user={userWithNoPersonalLinks} />);

    screen.getByText("icon-location.svg");
    screen.getByText("icon-website.svg");
    screen.getByText("icon-twitter.svg");
    screen.getByText("icon-company.svg");
    expect(screen.getAllByText("Not Available")).toHaveLength(4);
  });
});
