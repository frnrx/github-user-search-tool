import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
`;
