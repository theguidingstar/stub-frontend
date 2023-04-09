import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

/**
 * @param {React.ReactNode} children
 * @param {any} props
 *
 * @returns {JSX.Element}
 */

interface HeadTextProps extends TextProps {
  children: React.ReactNode;
}

const HeadText = ({ children, ...props }: HeadTextProps) => {
  return (
    <Text
      fontSize={{
        base: "36px",
        md: "48px",
        lg: "96px",
      }}
      fontWeight="bold"
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
};

export default HeadText;
