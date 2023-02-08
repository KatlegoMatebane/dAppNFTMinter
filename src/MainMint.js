import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import roboPunksNFT from "./RoboPunksNFT.json";

const roboPunksNFTAddress = "0x24361bC82d59361e8A9e900eb39bA6B38Fb892DB";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="300px">
      <Box width="640px">
        <div>
          <Text fontSize="48px" textShadow="0 5px #000000">
            KATLEGO'S NFT MINTER
          </Text>
          <Text
            fontSize="25px"
            letterSpacing="-5.5%"
            fontFamily="montserrat"
            textShadow="0 2px 2px #000000"
          >
            This is a NFT minter based on the RoboPunks NFT Minter Project.
          </Text>
        </div>

        {isConnected ? (
          <div>
            <Flex justify="center" align="center">
              <Button
                backgroundColor="#4a4f56"
                border="0px"
                borderRadius="5px"
                color="white"
                cursor="pointer"
                fontFamily="montserrat"
                padding="12px 15px"
                margin="10px"
                onClick={handleDecrement}
              >
                {" "}
                -
              </Button>

              <Input
                readOnly
                fontFamily="montserrat"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="15px"
                marginTop="0px"
                type="number"
                value={mintAmount}
              />

              <Button
                backgroundColor="#4a4f56"
                border="0px"
                borderRadius="5px"
                color="white"
                cursor="pointer"
                fontFamily="montserrat"
                padding="12px 15px"
                margin="10"
                onClick={handleIncrement}
              >
                {" "}
                +
              </Button>
            </Flex>
            <Button
              backgroundColor="red"
              borderRadius="10px 10px 10px 10px"
              border="0px"
              color="white"
              cursor="pointer"
              fontFamily="montserrat-bold"
              padding="10px 55px"
              margin="10"
              onClick={handleMint}
            >
              MINT NOW
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="20px"
            letterSpacing="5.5%"
            fontFamily="montserrat"
            textShadow="0 3px #000000"
            color="YELLOW"
          >
            Please connect your wallet to mint!
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
