import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import useTheme from "../../hooks/useTheme";
import theme from "../../styles/theme";
import { ThemeToggle, Body, Container, Header } from "./styles";
import { ReactComponent as SunSVG } from "../../styles/assets/icons/icon-sun.svg";
import { ReactComponent as MoonSVG } from "../../styles/assets/icons/icon-moon.svg";

type ThemeProviderProps = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { themeMode, toggleTheme } = useTheme();

  const getCurrentTheme = () => {
    return themeMode === "dark" ? theme.darkTheme : theme.lightTheme;
  };

  // TODO: separate Header into a individual component
  return (
    <SCThemeProvider theme={getCurrentTheme()}>
      <Body>
        <Container>
          <Header>
            <div>DevFinder</div>
            <ThemeToggle onClick={toggleTheme}>
              {themeMode}
              {themeMode === "dark" ? <MoonSVG /> : <SunSVG />}
            </ThemeToggle>
          </Header>
          {children}
        </Container>
      </Body>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
