import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  let router = useRouter();
  let { asPath } = router;
  return (
    <Flex as="header" width="full" align="center">
      <Box>
        <Link href="/">
          <ChakraLink
            p={2}
            rounded={"md"}
            fontSize="sm"
            mr={3}
            bg={
              "/" === asPath
                ? useColorModeValue("gray.100", "gray.700")
                : "none"
            }
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            Home
          </ChakraLink>
        </Link>

        <Link href="/projects">
          <ChakraLink
            p={2}
            rounded={"md"}
            fontSize="sm"
            bg={
              "/projects" === asPath
                ? useColorModeValue("gray.100", "gray.700")
                : "none"
            }
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            Projects
          </ChakraLink>
        </Link>
      </Box>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
