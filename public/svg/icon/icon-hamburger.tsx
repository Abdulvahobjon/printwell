import { SVGProps } from "@/types/SVGProps";
import * as React from "react";
const IconHamburger = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="36px"
    viewBox="0 -960 960 960"
    width="36px"
    fill={props.color}
    {...props}
  >
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </svg>
);
export default IconHamburger;
