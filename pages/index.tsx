import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, Image,  } from "@chakra-ui/react";
import Navbar from "./components/navbar/index"
import Hero from "./components/Hero/index"
import CardComponent from "./components/Dashboard";
import Economies from "./components/Economies";
import Console from "./components/Console";

 const Home = () => {
  return (
    <Flex width={"full"} height="100vh" direction={"column"} backgroundColor={"#000000"}>
    <Navbar />
    <Hero/>
    {/* <CardComponent/> */}
    <Economies/>
    <Console/>
    </Flex>
  );
}

export default Home