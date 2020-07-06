import React, { useRef, useEffect } from 'react';
import cs from 'classnames';
import { useDropdownContext } from './index';
import { Icon, IconDefinition } from '../../atoms/Icon/index';

export interface DropdownItemProps {
  label?: string;
  onClick: () => void;
  icon?: IconDefinition;
  centere?: boolean;
  index?: number;
}
export const DropdownItem: React.FC<DropdownItemProps> = props => {
  const { open, toggle, highlightIndex } = useDropdownContext();
  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && props.index === highlightIndex && itemRef.current) {
      itemRef.current.focus();
    }
  }, [open, highlightIndex]);

  return (
    <button
      className={cs('Business-Dropdown-item', { 'Business-Dropdown-item--centered': props.centere })}
      ref={itemRef}
      tabIndex={-1}
      onFocus={e => e.stopPropagation()}
      onClick={() => {
        props.onClick();
        if (toggle) {
          toggle();
        }
      }}
    >
      {props.icon ? (
        <div>
          <Icon icon={props.icon} />
        </div>
      ) : null}
      <div>
        {props.label ? <div>{props.label}</div> : null}
        <div>{props.children}</div>
      </div>
    </button>
  );
};
