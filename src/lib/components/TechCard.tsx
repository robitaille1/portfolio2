import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

type Tool = {
  name: string;
  description: string;
  icon: JSX.Element;
};

const TechCard = ({ name, description, icon }: Tool) => {
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        d="flex"
        role="group"
        h="100%"
        _hover={{
          borderColor: "blue.700",
        }}
      >
        <IconButton
          as="a"
          rel="noopener"
          target="_blank"
          aria-label={name}
          mr={3}
          _groupHover={{ color: "blue.700" }}
          icon={icon}
        />
        <Box>
          <LinkOverlay rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {name}
            </Heading>
            <Text mt={1} fontSize="sm">
              {description}
            </Text>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default TechCard;
