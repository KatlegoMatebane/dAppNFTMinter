import React from "react";
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import Instagram from "./assets/social-media-icons/Instagram.png";
import LinkedIn from "./assets/social-media-icons/LinkedIn.png";
import Github from "./assets/social-media-icons/Github.png";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* Left Side - Social Media Icons */}
      <Flex justify="space-between" width="40%" padding="0 75px">
        <Link href="https://www.instagram.com/katlego_matebane/">
          <Image src={Instagram} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>
      <Flex justify="space-between" width="40%" padding="0 75px">
        <Link href="https://www.linkedin.com/in/katlego-matebane-5b43a380/">
          <Image src={LinkedIn} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>
      <Flex justify="space-between" width="40%" padding="0 75px">
        <Link href="https://github.com/KatlegoMatebane">
          <Image src={Github} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      {/* Right Side - Sections and Connect */}
      <Flex justify="space-between" align="center" width="40%" padding="30px">
        {/* Connect Button */}
        {isConnected ? (
          <Box
            backgroundColor="Yellow"
            fontSize="12px"
            color="#151515"
            fontFamily="montserrat-bold"
            padding="15px"
            margin="0 45px"
            borderRadius="5px"
          >
            WALLET CONNECTED
          </Box>
        ) : (
          <Button
            backgroundColor="red"
            fontSize="12px"
            borderRadius="5px"
            border="0px"
            boxShadow="0px 2px 2px 1px #0f0f0f"
            color="white"
            cursor="pointer"
            fontFamily="montserrat-bold"
            padding="15px"
            margin="0 45px"
            onClick={connectAccount}
          >
            CONNECT WALLET
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
