import React from "react";
import Icon from "../Icons";
import { Body } from "../Typography";
import { StyledLink, DisabledLink } from "./styles";

type LinkProps = {
  text: string;
  link?: string | null;
  icon?: "location" | "website" | "company" | "twitter";
};

const Link = ({ text, link, icon }: LinkProps) => {
  return link ? (
    <StyledLink href={link}>
      {icon && <Icon icon={icon} />}
      <Body>{text}</Body>
    </StyledLink>
  ) : (
    <DisabledLink>
      {icon && <Icon icon={icon} />}
      <Body>{text}</Body>
    </DisabledLink>
  );
};

export default Link;
