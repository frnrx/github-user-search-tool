import styled from "styled-components";
import { H3 } from "../Typography";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background2};
  padding: 16px;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  & > svg {
    width: 30px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  padding-left: 16px;
  font-size: 16px;
  line-height: 24px;
  font-family: "SpaceMono";
  width: 375px;
  &::placeholder {
    color: ${(props) => props.theme.colors.textIdle};
    overflow: visible;
    width: 100%;
    text-overflow: ellipsis;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: 115px;
  }
`;

// This button could be turned into a shared component in the future
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  font-family: "SpaceMonoBold";
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled(H3)`
  color: ${(props) => props.theme.colors.error};
  white-space: nowrap;
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.background2};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
