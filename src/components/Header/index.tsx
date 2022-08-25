import React from "react";
import { Container, ThemeToggle } from "./styles";
import { ReactComponent as SunSVG } from "../../styles/assets/icons/icon-sun.svg";
import { ReactComponent as MoonSVG } from "../../styles/assets/icons/icon-moon.svg";
import { H1 } from "../Typography";

type HeaderProps = {
  themeMode: string;
  toggleTheme: () => void;
};

const Header = ({ themeMode, toggleTheme }: HeaderProps) => {
  return (
    <Container>
      <H1>devfinder</H1>
      <ThemeToggle onClick={toggleTheme}>
        {themeMode}
        {themeMode === "dark" ? <MoonSVG /> : <SunSVG />}
      </ThemeToggle>
    </Container>
  );
};

export default Header;
