import { render as ReactTestingLibraryRender } from "@testing-library/react";
import ThemeProvider from "../components/ThemeProvider";

const render = (children: JSX.Element) =>
  ReactTestingLibraryRender(<ThemeProvider>{children}</ThemeProvider>);

export default render;
