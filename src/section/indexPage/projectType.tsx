import Button from "@/components/formElement/button";
import RegularText from "@/components/typography/regularText";
import SubheadText from "@/components/typography/subHeadingText";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
const TYPES: String[] = [
  "Collection Pages",
  "DAO Pages",
  "Portfolios",
  "NFT Project Pages",
  "Airdrop Pages",
  "Tokengating",
  "Personal Storefronts",
  "Personal Storefronts",
  "Event Pages",
  "One-Click Deploy",
  "Auctions",
  "Custom Tiles",
  "Crowdfunding",
  "NFT Collections",
  "NFT Mint Pages",
  "Blogs",
];
export default function ProjectType() {
  return (
    <>
      <SubheadText>
        Feature rich No-Code components built for any type of project
      </SubheadText>
      <Box textAlign={"center"} px={"28"}>
        {TYPES.map((type, index) => (
          <Button key={index} m={2}>
            {type}
          </Button>
        ))}
      </Box>
      <Box maxWidth={"100%"} px={"36"} my={20}>
        <Image
          src="/images/projectType_blogs.png"
          alt="Stub"
          width="1000"
          height="600"
          layout="responsive"
        />
      </Box>
    </>
  );
}
