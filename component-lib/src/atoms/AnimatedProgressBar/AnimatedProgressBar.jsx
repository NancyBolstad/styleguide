import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 * Category: Loader
 *
 * An animated progress bar with changeable bar and background color.
 * Basically copied from https://codepen.io/holdencreative/pen/vEVbwv with some modifications
 */
const AnimatedProgressBar = ({ backgroundColor, color }) => (
  <div
    className={classnames('animated-progress-bar', {
      [`animated-progress-bar-color--${backgroundColor}`]: backgroundColor,
    })}
  >
    <div
      className={classnames('indeterminate', {
        [`animated-progress-bar-color--${color}`]: color,
      })}
    />
  </div>
);

AnimatedProgressBar.defaultProps = {
  backgroundColor: 'grey',
  color: 'purple',
};

AnimatedProgressBar.propTypes = {
  backgroundColor: PropTypes.oneOf(['light-grey', 'grey', 'white', 'black', 'purple']),
  color: PropTypes.oneOf(['light-grey', 'white', 'purple', 'grey', 'black']),
};

export default AnimatedProgressBar;
