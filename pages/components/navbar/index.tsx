import {
  Button,
  Flex,
  Image,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      width="100%"
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      px={"24px"}
      position={"fixed"}
    >
      <Flex direction="row">
        <Image
          src="https://assets-global.website-files.com/6513bf645e57af66bce2b584/6513ca3f9df878038d297292_Vtopia%20Logo.svg"
          width={"115px"}
          height={"24px"}
        />
      </Flex>
      <Flex gap={2}>
        <Button
          variant="none"
          fontWeight="medium"
          fontSize={"14px"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Product
        </Button>
        <Button
          variant="none"
          fontWeight="medium"
          fontSize={"14px"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Reward
        </Button>
        <Button
          variant="none"
          fontWeight="medium"
          fontSize={"14px"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Eratainment
        </Button>
        <Button
          variant="none"
          fontWeight="medium"
          fontSize={"14px"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Launchpad
        </Button>
        <Button
          variant="none"
          fontWeight="medium"
          fontSize={"14px"}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          About
        </Button>
      </Flex>
      <Flex>
        <Button
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 50% 100%,rgba(245, 245, 247, .28) 8%, #010101)",
            border: "1px solid rgba(169, 169, 169, 0.32)",
            borderRadius: "8px",
            fontFamily: "Inter, sans-serif",
          }}
          gap={"3px"}
          fontSize={"14px"}
          fontWeight={"medium"}
          _hover={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 50% 100%, rgba(0, 255, 159, .28) 8%, #010101)",
          }}
        >
          Staking Live
          <Icon bg={"transparent"} as={Arrow} w={"17px"} _loading={"lazy"} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 24 24",
  path: (
    <svg
      width="28"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="transparent"
      />
    </svg>
  ),
});
