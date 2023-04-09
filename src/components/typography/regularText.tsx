import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

/**
 * @param {React.ReactNode} children
 * @param {any} props
 *
 * @returns {JSX.Element}
 */

interface RegularTextProps extends TextProps {
  children: React.ReactNode;
}

const RegularText = ({ children, ...props }: RegularTextProps) => {
  return (
    <Text textAlign={"center"} {...props}>
      {children}
    </Text>
  );
};

export default RegularText;
