import Button from "@/components/formElement/button";
import HeadText from "@/components/typography/headText";
import RegularText from "@/components/typography/regularText";
import SubheadText from "@/components/typography/subHeadingText";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const text = [
  "Chinmay",
  "Yash",
  "Manan",
  "Sham",
  "David",
  "Zan",
  "Zyan",
  "Zinc",
  "Mohan",
  "Rishi"
];
export default function Domain() {
  const [selectedText, setSelectedText] = useState("Chinmay");

  useEffect(() => {
    const interval = setInterval(() => {
      const index = text.indexOf(selectedText);
      if (index === text.length - 1) {
        setSelectedText(text[0]);
      } else {
        setSelectedText(text[index + 1]);
      }
    }, 1100);

    return () => clearInterval(interval);
  }, [selectedText]);
  return (
    <>
      <SubheadText>Personalized Domains</SubheadText>
      <RegularText>
        Choose a unique stubs.world domain, or connect your own
      </RegularText>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <div
            style={{
              height: "500px",
              overflow: "hidden",
              textAlign: "end",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                textAlign: "center",
                translateY: "100%",
                animation: "my-animation 10s linear infinite",
              }}
              animate={{ translateY: "100%" }}
            >
              {text.map((text) => <HeadText color={selectedText === text ? '#000' : "grey"} textAlign={"right"}>{text}</HeadText>)}
            </motion.div>
            <style>{`
        @keyframes my-animation {
          from {
            transform: translateY(50%);
          }
          to {
            transform: translateY(-200%);
          }
        }
      `}</style>
          </div>
        </Box>
        <HeadText display={"flex"} alignItems={"center"}>
          .stubs.world
        </HeadText>
      </SimpleGrid>
      <Button display={"flex"} margin={"auto"} mt={4}>
        Choose a Domain
      </Button>
    </>
  );
}
