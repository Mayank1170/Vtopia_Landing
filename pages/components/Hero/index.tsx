import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../navbar";
import { relative } from "path";

const Hero: React.FC = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        alignItems={"center"}
        spacing={{ base: 8, md: 5 }}
        pt={{ base: 20, md: "96px" }}
      >
        <Box
          className="h-[30px] flex gap-x-1 items-center text-[15px] text-[#86868b]"
          border={"1px solid rgba(169,169,169,.24)"}
          paddingY={"4px"}
          paddingX={"12px"}
          borderRadius={"99px"}
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 50% 100%,rgba(245, 245, 247, .16), #010101)",
            backdropFilter: "blur(8px)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Icon as={Thunder} w={"12px"} />
          New: Our Eratainment just landed
        </Box>
        <Heading
          maxW={"760px"}
          fontWeight={500}
          fontStyle={"Inter"}
          fontSize={{ base: "2xl", sm: "4xl", md: "7xl" }}
          alignItems={"center"}
          lineHeight={"120%"}
          color={"#f5f5f7"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Abridging the NFT <br /> Disconnect
        </Heading>
        <Text
          fontSize={"18px"}
          color={"#86868b"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Navigate the realms of digital assets with unparalleled speed at our{" "}
          <br />
          modular NFT Marketplace and Aggregator - your express gateway to{" "}
          <br />
          diverse NFT economies.
        </Text>
        <Button
          style={{ fontFamily: "Inter, sans-serif" }}
          mt={"10px"}
          flex={"row"}
          gap={"8px"}
          py={"22px"}
          px={"20px"}
          alignItems={"center"}
          borderRadius={"12px"}
          border={"1px solid rgba(0, 255, 159, 0.16)"}
        >
          <Icon bg={"transparent"} w={"24px"} as={LogoBtn} />
          <div className="bg-transparent text-[14px] font-medium"> Be a Vtopian</div>
        </Button>
      </Stack>
    </Container>
  );
};

export default Hero;

const Thunder = createIcon({
  displayName: "Thunder",
  viewBox: "0 0 54 80",
  path: (
    <svg
      width="54"
      height="80"
      viewBox="0 0 54 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1 79.3C18.4 79.5 18.8 79.5 19.1 79.6C20 79.6 20.9 79.3 21.5 78.5L52.8 37.3C53.5 36.5 53.6 35.3 53.1 34.4C52.7 33.5 51.7 32.8 50.7 32.8L32.6 31.8L39.2 4.00004C39.5 2.80004 38.9 1.40004 37.8 0.80004C36.7 0.20004 35.3 0.50004 34.4 1.50004L1.50001 39.3C0.80001 40.1 0.60001 41.3 1.00001 42.2C1.40001 43.2 2.40001 43.8 3.40001 43.9L23.4 45L16.5 76C16.3 77.4 16.9 78.8 18.1 79.3Z"
        fill="#00FF9F"
      />
    </svg>
  ),
});

const LogoBtn = createIcon({
  displayName: "LogoBtn",
  viewBox: "0 0 701 393",
  path: (
    <svg
      width="701"
      height="393"
      viewBox="0 0 701 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_397_45)">
        <path
          d="M168.298 7.71808L101.379 76.4622L172.557 146.423H529.661L598.405 76.4622C579.141 57.6032 538.422 17.4517 529.661 7.71808C520.901 -2.01556 511.411 3.6624 507.761 7.71808L440.233 76.4622C424.821 86.8042 385.116 107.732 349.588 108.705C314.06 109.678 275.572 87.6154 260.768 76.4622C242.315 58.6171 202.731 19.8852 192.024 7.71808C181.317 -4.44902 171.746 2.64846 168.298 7.71808Z"
          fill="white"
          stroke="white"
          stroke-width="1.21671"
        />
        <path
          d="M68.5274 108.704L1 177.448C67.9191 243.759 201.767 379.432 208.449 386.114C215.141 392.806 220.008 392.198 223.658 392.198C304.164 391.995 467.106 392.198 474.909 392.198C482.209 392.198 487.076 388.548 489.509 386.114L700 177.448C680.33 159.4 638.799 120.384 630.039 108.704C621.279 97.0239 611.383 103.837 607.53 108.704L474.909 243.15C456.05 260.185 404.339 291.819 348.371 291.819C300.189 296.686 244.342 263.227 223.658 243.15C183.101 202.391 99.7969 118.438 91.0366 108.704C82.2762 98.9704 72.3803 104.648 68.5274 108.704Z"
          fill="white"
          stroke="white"
          stroke-width="1.21671"
        />
      </g>
      <defs>
        <clipPath id="clip0_397_45">
          <rect width="701" height="393" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
});
