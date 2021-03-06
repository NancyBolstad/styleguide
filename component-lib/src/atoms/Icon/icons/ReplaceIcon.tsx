//
// WARNING
//
// Do not make manual changes to this file.
// This file was generated by scripts/generate-icons.js.
//
// Generated from: replace.svg
//

import React from 'react';
import cs from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export function ReplaceIcon(props: Props) {
  return (
    <svg
      className={cs('Icon', 'Icon--replace', props.className)}
      style={props.style}
      aria-hidden={props.title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        d="M22.68 30.66a2.001 2.001 0 0 1 0 2.83l-8.21 8.21H54a2 2 0 1 1 0 4H14.47l8.21 8.21a2 2 0 0 1-2.83 2.83L9.39 46.27a3.64 3.64 0 0 1 0-5.15l10.46-10.46a2.001 2.001 0 0 1 2.83 0zm21.47-23l10.46 10.46a3.65 3.65 0 0 1 .01 5.15L44.15 33.74a2 2 0 1 1-2.83-2.83l8.21-8.21H10a2 2 0 1 1 0-4h39.53l-8.21-8.22a2 2 0 0 1 2.83-2.82z"
      />
    </svg>
  );
}
