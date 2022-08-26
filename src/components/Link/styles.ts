import styled from "styled-components";
import { Body } from "../Typography";

export const StyledLink = styled.a`
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;

export const DisabledLink = styled(Body)`
  & > span {
    color: ${(props) => props.theme.colors.disabled};
  }
  & > svg > path {
    fill: ${(props) => props.theme.colors.disabled};
  }
`;
