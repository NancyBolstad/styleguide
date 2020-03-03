import React from 'react';
import cs from 'classnames';
import { Icon } from '../Icon';
import { SvgIcon } from '../../index';

/**
 * Status: *finished*.
 * Category: Links
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 *
 * Our links have _two visual means_ of being identified: an underline and bolder font.
 */

export interface LinkProps {
  className?: string;
  /**
    * The text to display in the component. We prefer to use `children` instead.
    * @deprecated Use `children` instead.
   */
  text?: React.ReactNode;

  /**
   * Content of this link.
   */
  children?: React.ReactNode;

  target?: string;

  href: string;
  style?: React.CSSProperties;

  /**
   * Choose between forward arrow 'arrow-left' and backward arrow 'arrow-right' icon.
   * 
   * 'back-icon' & 'forward-icon' are  deprecated!
   */
  icon?: 'arrow-left' | 'arrow-right' | 'back-icon' | 'forward-icon';

  /**
   * Set position of icon (before or after)
   */
  iconPosition?: 'before' | 'after';

  iconColor?: 'core-purple' | 'black' | 'white';

  /**
   * Only true if Link are on a dark background
   */
  negative?: boolean;
}

export const Link = (props: LinkProps) => {
  const {
    className,
    text,
    children,
    href,
    icon,
    iconPosition,
    iconColor = 'core-purple',
    negative,
    target = undefined,
    ...rest
  } = props;

  return (
    <a
      className={cs(
        negative ? 'link--negative' : 'link',
        icon && iconColor !== 'white' ? 'link--icon' : '',
        icon && iconColor === 'white' ? 'link--negative--icon' : '',
        className ? className : undefined
      )}
      href={href}
      target={target}
      {...rest}
    >
      {icon && iconPosition === 'before' ? (
        <>
          {icon === 'back-icon' || icon === 'forward-icon' ? 
            <SvgIcon 
              iconName="arrow-left" 
              className={`link--icon--before link--${iconColor === 'white' ? 'negative--' : ''}icon--${iconColor}`}
            /> : 
            <Icon
              icon={icon}
              className={`link--icon--before link--${iconColor === 'white' ? 'negative--' : ''}icon--${iconColor}`}
            />
          }
        </>
      ) : null}
      {text}
      {children}
      {icon && iconPosition === 'after' ? (
        <>
          {icon === 'forward-icon' || icon === 'back-icon' ? 
            <SvgIcon 
              iconName="arrow-right" 
              className={`link--icon--after link--${iconColor === 'white' ? 'negative--' : ''}icon--${iconColor}`}
            /> : 
            <Icon
              icon={icon}
              className={`link--icon--after link--${iconColor === 'white' ? 'negative--' : ''}icon--${iconColor}`}
            />
          }
        </> 
      ) : null}
    </a>
  );
};

export default Link;
