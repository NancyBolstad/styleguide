//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: pie-chart.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function PieChartIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--pie-chart', props.className)}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        fillRule="evenodd"
        d="M28.62 14.25a2 2 0 0 1 2 2v18.13h18.13a2 2 0 0 1 2 2c-.011 12.216-9.914 22.114-22.13 22.12-12.036-.256-21.66-10.086-21.66-22.125s9.624-21.87 21.66-22.125zm-2 4.11c-9.444 1.037-16.486 9.188-16.14 18.682.346 9.495 7.963 17.112 17.458 17.458 9.494.346 17.645-6.696 18.682-16.14h-18a2 2 0 0 1-2-2v-18zM36.38 6.5c12.21.017 22.103 9.91 22.12 22.12a2 2 0 0 1-2 2H36.38a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2zm2 4.12v16h16a18.18 18.18 0 0 0-16-16z"
      />
    </svg>
  );
}