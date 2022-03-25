import React from "react";

function PlayButton(props) {
  const title = props.title || "btn play";

  return (
    <svg
      height="64"
      width="64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
    >
      <title>{title}</title>
      <g
        stroke="var(--color-primary)"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <circle
          cx="32"
          cy="32"
          fill="none"
          r="29"
          stroke="var(--color-primary)"
        />
        <polygon fill="var(--color-primary)" points="23 46 23 18 47 32 23 46" />
      </g>
    </svg>
  );
}

export default PlayButton;
