import React from 'react';
import PropTypes from 'prop-types';

const AlertIcon = ({ color, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

AlertIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

AlertIcon.defaultProps = {
  color: 'currentColor',
  height: '24',
  width: '24',
};

export default AlertIcon;
