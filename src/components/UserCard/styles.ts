import styled from "styled-components";
import { Body, H3, H1 } from "../Typography";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.background2};
  margin-top: 16px;
  padding: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    // border-radius: unset;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 24px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  width: 100%;
  @media (max-width: 768px) {
    width: unset;
  }
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Username = styled(H3)`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 16px;
`;

export const NoBio = styled(Body)`
  color: ${(props) => props.theme.colors.disabled};
`;

export const GitHubInfoWrapper = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.background1};
  margin: 32px 0 24px 0;
`;

export const GitHubInfo = styled(ColumnWrapper)`
  margin: 0;
  min-width: 25%;
  padding: 0 8px;
`;

export const PersonalLinks = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 45%;
  & > * > svg > path {
    fill: ${(props) => props.theme.colors.text};
    margin-right: 8px;
  }
  & > * > svg {
    margin-right: 16px;
  }
  & > * {
    margin-top: 16px;
  }
`;

export const Name = styled(H1)`
  margin-right: 16px;
`;
