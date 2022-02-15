import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text color="gray.500">
        © {new Date().getFullYear()} - Lucas Robitaille
      </Text>
    </Flex>
  );
};

export default Footer;
