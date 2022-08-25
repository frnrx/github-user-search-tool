import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import useTheme from "../../hooks/useTheme";
import theme from "../../styles/theme";
import Header from "../Header";
import { Body, Container } from "./styles";

type ThemeProviderProps = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { themeMode, toggleTheme } = useTheme();

  const getCurrentTheme = () => {
    return themeMode === "dark" ? theme.darkTheme : theme.lightTheme;
  };

  return (
    <SCThemeProvider theme={getCurrentTheme()}>
      <Body>
        <Container>
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          {children}
        </Container>
      </Body>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
