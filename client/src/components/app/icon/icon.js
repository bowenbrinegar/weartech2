import React from "react";
import "./icon.css";
const { PropTypes } = React;

const icons = {
  trash:
    "M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z",
  facebook:
    "M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z",
  bubble:
    "M512 64c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"
};

const Icon = props => (
  <div id="icons">
    <svg width={props.width} height={props.height} viewBox="0 0 1024 1024">
      <path d={icons[props.icon]} />
    </svg>
    <p>{props.children}</p>
  </div>
);

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired
// };

export default Icon;
