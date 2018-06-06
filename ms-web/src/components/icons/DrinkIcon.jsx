import React from "react";

function DrinkIcon(props) {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      viewBox="0 0 92 92"
      fill={props.fill ? "#30A5CA" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="46" cy="46" r="46" fill={props.fill ? "#30A5CA" : (props.transparent ? "none" : "#C4C4C4")} />
      <path
        d="M41.1429 0H0C0 15.4845 2.84531 24.2222 11.2156 30.9501C11.719 31.3547 12.3538 31.5655 12.9996 31.5713C20.3604 31.6373 20.4269 31.6537 27.3295 31.5736C27.9485 31.5665 28.5581 31.3699 29.051 30.9955C37.8846 24.2872 41.1429 15.8631 41.1429 0Z"
        transform="translate(25 36)"
        fill="white"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M17.7143 9.51351C17.7143 13.5968 14.264 17.027 9.85714 17.027C5.45028 17.027 2 13.5968 2 9.51351C2 5.43021 5.45028 2 9.85714 2C14.264 2 17.7143 5.43021 17.7143 9.51351Z"
        transform="translate(58 42)"
        stroke="white"
        strokeWidth="4"
      />
      <rect
        width="41"
        height="4"
        rx="1.5"
        transform="translate(25 66)"
        fill="white"
      />
      <rect
        width="39"
        height="19"
        transform="translate(26 13)"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0"
            transform="translate(-0.010708) scale(0.00276807 0.00568182)"
          />
        </pattern>
        <image
          id="image0"
          width="369"
          height="176"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

DrinkIcon.defaultProps = {
  size: 50
};

export default DrinkIcon;
