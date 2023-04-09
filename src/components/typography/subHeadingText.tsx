import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

/**
 * @param {React.ReactNode} children
 * @param {any} props
 *
 * @returns {JSX.Element}
 */

interface SubheadTextProps extends TextProps {
  children: React.ReactNode;
}

const SubheadText = ({ children, ...props }: SubheadTextProps) => {
  return (
    <Text
      fontSize={{
        base: "14px",
        md: "24px",
        lg: "36px",
      }}
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
};

export default SubheadText;
