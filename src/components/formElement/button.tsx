import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
/**
 * @param {React.ReactNode} children
 * @param {() => void} onClick
 * @param {any} props
 *
 * @returns {JSX.Element}
 */
interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const Button = ({ children, selected, onClick, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      color={selected ? "#fff" : undefined}
      bg={selected ? "#000" : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  selected: false,
};

export default Button;
