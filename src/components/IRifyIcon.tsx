import React from "react";
import Icon from "@ant-design/icons";

const OutlineArrowright = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5L21 12M21 12L14 19M21 12L3 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
/**
 * @description  Icon/Outline/Outlinearrow-right
 */
export const OutlineArrowrightIcon = (props) => {
  return <Icon component={OutlineArrowright} {...props} />;
};