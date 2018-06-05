import React from "react";

function PlayIcon(props) {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      viewBox="0 0 92 92"
      fill={props.fill ? "#FFB029" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="46" cy="46" r="46" fill={props.fill ? "#FFB029" : "#C4C4C4"} />
      <circle
        cx="22"
        cy="22"
        r="24"
        transform="translate(24 26)"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M0 12V0"
        transform="translate(46 12)"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M9.36499 0C-3.30486 11.1499 -2.93692 37.1663 9.36499 47.5"
        transform="translate(37 71.5) scale(1 -1)"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M8.51968 0C-3.08009 11.1935 -2.59699 37.1948 8.51968 47.5"
        transform="translate(70.5 37.918) rotate(90)"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M8.51968 0C-3.08009 11.1935 -2.59699 37.1948 8.51968 47.5"
        transform="translate(23 57.5198) rotate(-90)"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M0 0H8"
        transform="translate(68 73)"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M0 0V8"
        transform="translate(72 69)"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M0 0H10"
        transform="translate(49 47)"
        stroke="white"
        strokeWidth="2.5"
      />
      <path
        d="M0 0V10"
        transform="translate(54 42)"
        stroke="white"
        strokeWidth="2.5"
      />
      <path
        d="M0 0H8"
        transform="translate(16 22)"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M0 0V8"
        transform="translate(20 18)"
        stroke="white"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98804 33.7507H7.93188C6.552 39.3149 3.88257 44.2383 0.017334 47.4851L1.30396 49.0164C5.67456 45.3447 8.5647 39.8367 9.98804 33.7507ZM8.00464 15.7507C6.66016 10.1069 3.98901 5.01172 0 1.50146L1.32129 0C5.79297 3.9353 8.6731 9.59888 10.0566 15.7507H8.00464Z"
        transform="translate(44.9734 23.2493)"
        fill="white"
        stroke="white"
      />
    </svg>
  );
}

PlayIcon.defaultProps = {
  size: 50
};

export default PlayIcon;
