import React from "react";

import { ReactComponent as LocationSVG } from "../../styles/assets/icons/icon-location.svg";
import { ReactComponent as TwitterSVG } from "../../styles/assets/icons/icon-twitter.svg";
import { ReactComponent as WebsiteSVG } from "../../styles/assets/icons/icon-website.svg";
import { ReactComponent as CompanySVG } from "../../styles/assets/icons/icon-company.svg";
import { ReactComponent as SunSVG } from "../../styles/assets/icons/icon-sun.svg";
import { ReactComponent as MoonSVG } from "../../styles/assets/icons/icon-moon.svg";
import { ReactComponent as SearchSVG } from "../../styles/assets/icons/icon-search.svg";

type IconProps = {
  icon:
    | "location"
    | "website"
    | "company"
    | "twitter"
    | "moon"
    | "sun"
    | "search";
};

const Icon = ({ icon }: IconProps) => {
  switch (icon) {
    case "location":
      return <LocationSVG />;
    case "website":
      return <WebsiteSVG />;
    case "company":
      return <CompanySVG />;
    case "twitter":
      return <TwitterSVG />;
    case "sun":
      return <SunSVG />;
    case "moon":
      return <MoonSVG />;
    case "search":
      return <SearchSVG />;
  }
};

export default Icon;
