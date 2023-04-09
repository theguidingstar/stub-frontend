import Button from "@/components/formElement/button";
import HeadText from "@/components/typography/headText";
import RegularText from "@/components/typography/regularText";
import SubheadText from "@/components/typography/subHeadingText";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <Box>
      <HeadText>Web3 For Everyone</HeadText>
      <SubheadText>
        Create, launch and monetize any Web3 project in minutes
      </SubheadText>
      <Button margin={"auto"} display={"flex"}>
        Explore Your Studio
      </Button>
      <Box maxWidth={"100%"} px={"36"} my={20}>
        <Image
          src="/images/feature.png"
          alt="Stub"
          width="1000"
          height="60"
          layout="responsive"
        />
      </Box>
    </Box>
  );
}
