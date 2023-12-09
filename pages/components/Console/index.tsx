import {
  Box,
  Center,
  Container,
  Icon,
  createIcon,
  Image,
  Heading,
  Stack,
  Text,
  Tag,
  Flex,
} from "@chakra-ui/react";
import { Gradient } from "./Gradient_bg";
import { Stars } from "./stars";
import { url } from "inspector";
import { wallet } from "./wallet";

const Console: React.FC = () => {
  return (
    <Box>
      <Box alignItems={"center"} as="section" mt={"60px"}>
        <Gradient />
        <Stack align={"center"}>
          <Box
            className="h-[30px] flex gap-x-1 items-center text-[15px] text-[#86868b]"
            border={"1px solid rgba(169,169,169,.24)"}
            paddingY={"4px"}
            paddingX={"12px"}
            alignItems={"center"}
            borderRadius={"99px"}
            style={{
              backgroundImage:
                "radial-gradient(circle farthest-corner at 50% 100%,rgba(245, 245, 247, .16), #010101)",
              backdropFilter: "blur(8px)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Stars width={"12px"} />
            Introducing
          </Box>
          <Heading
            fontSize={"60px"}
            color={"#f5f5f7"}
            fontWeight={500}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Console
          </Heading>
          <Text
            fontSize={"18px"}
            color={"#86868b"}
            fontWeight={500}
            style={{ fontFamily: "Inter, sans-serif" }}
            mt={"18px"}
            alignItems={"center"}
          >
            Everything you need to discover, trade, analyze NFT
          </Text>
          <Text
            fontSize={"18px"}
            color={"#86868b"}
            fontWeight={500}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {" "}
            and manage your portfolio..
          </Text>
        </Stack>
      </Box>
      <Flex alignItems={"center"} gap={4}>
        <Box
          maxW="255px"
          h={"fit"}
          pl="6"
          pb={"5px"}
          borderRadius={"12px"}
          border={"1px solid rgba(169, 169, 169, 0.16)"}
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 100%,rgba(245, 245, 247, .12), #010101 65%)",
          }}
        >
          <Image
            w={"auto"}
            h={48}
            as={wallet}
            alt="Svartifoss Waterfall"
            borderRadius="xl"
            objectFit="cover"
            mx="auto"
            mb={5}
            mt={"-20px"}
          />
          <Flex my="4" alignItems={"center"} gap={1} background={"transparent"}>
            <Heading
              size="lg"
              flex={"row"}
              fontSize={"20px"}
              color={"#f5f5f7"}
              background={"transparent"}
            >
              Wallet Management
            </Heading>
          </Flex>
          <Text color={"#86868b"} background={"transparent"} fontSize={"14px"}>
            Follow wallets, check your ROI, list across multiple marketplaces.
          </Text>
        </Box>
        <Box
          maxW="255px"
          h={"fit"}
          pl="6"
          pb={"5px"}
          borderRadius={"12px"}
          border={"1px solid rgba(169, 169, 169, 0.16)"}
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 100%,rgba(245, 245, 247, .12), #010101 65%)",
          }}
        >
          <Image
            w={"auto"}
            h={48}
            as={wallet}
            alt="Svartifoss Waterfall"
            borderRadius="xl"
            objectFit="cover"
            mx="auto"
            mb={5}
            mt={"-20px"}
          />
          <Flex my="4" alignItems={"center"} gap={1} background={"transparent"}>
            <Heading
              size="lg"
              flex={"row"}
              fontSize={"20px"}
              color={"#f5f5f7"}
              background={"transparent"}
            >
              Wallet Management
            </Heading>
          </Flex>
          <Text color={"#86868b"} background={"transparent"} fontSize={"14px"}>
            Follow wallets, check your ROI, list across multiple marketplaces.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Console;
