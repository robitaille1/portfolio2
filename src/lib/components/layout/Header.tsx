import {
  Box,
  Flex,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <Flex as="header" width="full" align="center">
      <Box>
        <Link passHref href="/">
          <ChakraLink
            p={2}
            rounded="md"
            fontSize="sm"
            mr={3}
            bg={asPath === "/" ? "gray.100" : "none"}
            _dark={{ bg: asPath === "/" ? "gray.700" : "none" }}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            Home
          </ChakraLink>
        </Link>

        <Link passHref href="/projects">
          <ChakraLink
            p={2}
            rounded="md"
            fontSize="sm"
            bg={asPath === "/projects" ? "gray.100" : "none"}
            _dark={{ bg: asPath === "/projects" ? "gray.700" : "none" }}
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
