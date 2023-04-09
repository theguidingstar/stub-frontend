import RegularText from "@/components/typography/regularText";
import { Link } from "@/typedefinition/common";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const LINK: Link[] = [
  { label: "Launch App", url: "/" },
  { label: "About Us", url: "/" },
  { label: "FAQ", url: "/" },
  { label: "Discord", url: "/" },
  { label: "Twitter", url: "/" },
];
export default function Footer() {
  return (
    <Box
      p={4}
      mt={24}
      mb={{
        base: 4,
        md: 10,
      }}
    >
      <Box py={4}>
        <Image
          src="/images/logo.png"
          alt="Stub"
          width="100"
          height="60"
          style={{ margin: "auto" }}
        />
      </Box>
      <Box
        display={{
          base: "block",
          md: "flex",
        }}
        justifyContent={"center"}
      >
        {LINK.map((link: Link, index) => (
          <>
            <RegularText
              key={link.label}
              my={{
                base: 4,
                md: 0,
              }}
            >
              <a href={link.url} target="_blank">
                {link.label}
              </a>
            </RegularText>
            {index + 1 !== LINK.length && (
              <RegularText
                display={{
                  base: "none",
                  md: "block",
                }}
                mx={4}
              >
                |
              </RegularText>
            )}
          </>
        ))}
      </Box>
    </Box>
  );
}
