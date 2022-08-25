import React from "react";
import { Container, ThemeToggle } from "./styles";
import { ReactComponent as SunSVG } from "../../styles/assets/icons/icon-sun.svg";
import { ReactComponent as MoonSVG } from "../../styles/assets/icons/icon-moon.svg";

type HeaderProps = {
  themeMode: string;
  toggleTheme: () => void;
};

const Header = ({ themeMode, toggleTheme }: HeaderProps) => {
  return (
    <Container>
      <div>devfinder</div>
      <ThemeToggle onClick={toggleTheme}>
        {themeMode}
        {themeMode === "dark" ? <MoonSVG /> : <SunSVG />}
      </ThemeToggle>
    </Container>
  );
};

export default Header;
