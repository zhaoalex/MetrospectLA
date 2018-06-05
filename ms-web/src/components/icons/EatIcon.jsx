import React from "react";

function EatIcon(props) {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      viewBox="0 0 92 92"
      fill={props.fill ? "#FF6745" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="46" cy="46" r="46" fill={props.fill ? "#FF6745" : "#C4C4C4"} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.83838C0 1.22021 0.0214844 0.607178 0.0634766 0H50.5176C50.5596 0.607178 50.5811 1.22021 50.5811 1.83838C50.5811 13.5806 42.8552 23.4863 32.2944 26.5774H18.2866C7.72607 23.4863 0 13.5806 0 1.83838Z"
        transform="translate(21.0613 46.4226)"
        fill="white"
      />
      <path
        d="M21.5 0.000393902C15.3207 -0.0362082 10.3408 2.45652 0 16.5004H44C34.5056 2.18968 29 0.000244141 21.5 0.000393902Z"
        transform="translate(24 31.4998)"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M0 0.0055822L3.89992 -8.13196e-05L3 22.593H0V0.0055822Z"
        transform="translate(22.2383 18.4871) rotate(-20.7942)"
        fill="white"
      />
      <path
        d="M0 0.00495748L3.89992 0L3 19.7765H0V0.00495748Z"
        transform="translate(29.2192 15.8718) rotate(-17.6738)"
        fill="white"
      />
    </svg>
  );
}

EatIcon.defaultProps = {
  size: 50
};

export default EatIcon;
