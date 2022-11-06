import cx from 'classnames';
import React from 'react';
import styles from './Button.module.css';

interface Props {
  onClick: (...args: any[]) => any;
  children?: React.ReactNode;
  variant?: 'basic' | 'link' | 'secondary' | 'danger' | 'primary' | 'outline' | 'primary';
  className?: string;
  label?: string;
  size?: 'medium' | 'large';
  disabledClassName?: string;
  disabled?: boolean;
}

const renderChildren = (props: Props) => {
  const { label, children } = props;

  if (label) {
    return label;
  }

  if (children) {
    return children;
  }

  return 'Button';
};

const Button: React.FC<Props> = (props) => {
  let { className, size, variant, disabled, disabledClassName } = props;
  className = className ?? '';
  variant = variant ?? 'basic';
  size = size ?? 'medium';
  disabled = disabled ?? false;
  disabledClassName = disabledClassName ?? '';

  const _className = cx(className, styles[size], styles.button, styles[variant], {
    [styles.disabled]: disabled,
    [disabledClassName]: disabled,
  });

  const handleButtonClick = (event: React.SyntheticEvent) => {
    const { onClick, disabled } = props;
    if (disabled) return;
    onClick && onClick({ event });
  };

  return (
    <div onClick={handleButtonClick} className={_className}>
      {renderChildren(props)}
    </div>
  );
};

export default Button;
