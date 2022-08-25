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
  color: ${(props) => props.theme.colors.textIdle};

  & > svg {
    padding-left: 16px;
  }

  & > svg > path {
    fill: ${(props) => props.theme.colors.textIdle};
  }

  &:hover {
    color: ${(props) => props.theme.colors.textHover};
    & > svg > path {
      fill: ${(props) => props.theme.colors.textHover};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;
