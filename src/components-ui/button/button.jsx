import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './button.module.css';

const Button = forwardRef(({
  title
  , icon
  , image
  , className
  , onClick
  , type = 'button'
  , disabled = false
  , ...rest
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(styles.button, className)}
      type={type}
      {...rest}
    >
      {icon ?
      icon :
      <img
        src={image}
        className={styles.image}
        alt="button-icon"
      />
      }
      <span>{title}</span>
    </button>
  );
});

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.element,
  image: PropTypes.string
};

export default Button;
