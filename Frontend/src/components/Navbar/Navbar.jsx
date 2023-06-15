import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Show,
  HStack,
  Text
} from "@chakra-ui/react";
// import {
//   MoonIcon,
//   SunIcon,
//   HamburgerIcon,
//   CloseIcon,
//   // AddIcon,
// } from "@chakra-ui/icons";
import Photo from "./Photo";
import Name from "./Name";
import "./Navbar.css";

export default function Navbar() {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
  }
  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("#63a6e1", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={55} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="80%">
          <Text
      as="b"
      fontSize={{ base: "18px", md: "24px", lg: "30px" }}
      style={{ textShadow: "#FC0 1px 0 10px" }}
    >
      Task_Codes
    </Text>
    <Show breakpoint="(min-width: 1000px)">
              {" "}
            </Show>
          </HStack>
          <Photo />
          <Name />
          <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
              <Button
              onClick={handleLogout}
                              backgroundColor="#91c2ed"
                              _hover={{ bg: "#91c2ed", color: "black" }}
                              color="white"
                              variant="solid"
                              size={["sm", "md"]}> 
                log out
                </Button>
              
                
                {/* <Link
                    id="navRes"
                    href={Shubham_Verma_Resume}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    download="Shubham_Verma_Resume"
                  >
                    RESUME
                  </Link> */}
          
          
            </Stack>
          </Flex>

        </Flex>
      </Box>
    </div>
  );
}
