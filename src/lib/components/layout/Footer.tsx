import { Flex, Text, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="space-between">
      <Text color="gray.500">
        © {new Date().getFullYear()} - Lucas Robitaille
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="mailto:lucas@robitaille.xyz"
          aria-label="Email Me"
          icon={<FaEnvelope fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/lucas-robitaille/"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="20px" />}
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          as="a"
          href="https://github.com/robitaille1"
          aria-label="Github"
          icon={<FaGithub fontSize="20px" />}
          target="_blank"
          rel="noopener noreferrer"
        />
      </ButtonGroup>
    </Flex>
  );
};

export default Footer;
