import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 26px;
  line-height: 38px;
  font-family: "SpaceMonoBold";
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

export const H2 = styled.h2`
  font-size: 22px;
  line-height: 33px;
  font-family: "SpaceMonoBold";
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

export const H3 = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-family: "SpaceMono";
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const H4 = styled.h4`
  font-size: 13px;
  line-height: 20px;
  font-family: "SpaceMono";
  margin: 0;
  color: ${(props) => props.theme.colors.textHighlight};
`;

export const Body = styled.span`
  font-size: 15px;
  line-height: 25px;
  font-family: "SpaceMono";
  color: ${(props) => props.theme.colors.text};
`;
