import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'success';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const baseProps = {
    className: `button button-${variant} ${className}`,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  if (href) {
    return (
      <motion.a href={href} {...baseProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...baseProps} disabled={disabled}>
      {children}
    </motion.button>
  );
};

export default Button;
