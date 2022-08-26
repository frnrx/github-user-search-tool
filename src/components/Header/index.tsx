import React from "react";
import { Container, ThemeToggle } from "./styles";
import { H1 } from "../Typography";
import Icon from "../Icons";

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
        {themeMode === "dark" ? <Icon icon="moon" /> : <Icon icon="sun" />}
      </ThemeToggle>
    </Container>
  );
};

export default Header;
