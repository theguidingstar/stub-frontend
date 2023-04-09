import Button from "@/components/formElement/button";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <Box p={4} w="100%" display="flex" justifyContent="space-between">
      <Image src="/images/logo.png" alt="Stub" width="140" height="40" />
      <Button selected={true} onClick={() => console.log("clicked")}>
        Launch App
      </Button>
    </Box>
  );
}
