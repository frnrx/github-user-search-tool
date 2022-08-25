import styled from "styled-components";

export const ThemeToggle = styled.button`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  font-family: "SpaceMono";
  font-weight: bold;
  display: flex;
  align-items: center;
  height: min-content;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  & > svg {
    padding-left: 16px;
  }

  & > svg > path {
    fill: ${(props) => props.theme.colors.text};
  }

  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
    & > svg > path {
      fill: ${(props) => props.theme.colors.textHighlight};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
`;
