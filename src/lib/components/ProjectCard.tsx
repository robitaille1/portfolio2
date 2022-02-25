import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
  Tag,
} from "@chakra-ui/react";

const ProjectCard = () => {
  const { colorMode } = useColorMode();
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w="100%"
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
          />
        </Flex>
        <Stack flex={1} flexDirection="column" justifyContent="center" p={1}>
          <Heading px={3} mt={6} fontSize={"2xl"} fontFamily={"body"}>
            PUERH / CAFE
          </Heading>
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            An app that helps users organize their pu’erh teas by adding
            collections and tasting notes. Keep track of how your teas age, and
            how the flavor profile changes over time
          </Text>
          <Stack
            px={3}
            align={"center"}
            justify={"start"}
            direction={"row"}
            mt={6}
          >
            <Tag size={"sm"} variant="solid" colorScheme="blue">
              React
            </Tag>
            <Tag size={"sm"} variant="solid" colorScheme="blue">
              Node Js
            </Tag>
            <Tag size={"sm"} variant="solid" colorScheme="blue">
              Express
            </Tag>
            <Tag size={"sm"} variant="solid" colorScheme="blue">
              PostgreSQL
            </Tag>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Button
              size="md"
              fontWeight="normal"
              rounded="lg"
              px={6}
              mr={3}
              colorScheme="blue"
              bg={colorMode === "light" ? "blue.800" : "white"}
              _hover={{ bg: colorMode === "light" ? "blue.700" : "gray.300" }}
              fontSize="sm"
            >
              View Live
            </Button>
            <Button
              fontSize="sm"
              rounded="lg"
              size="md"
              fontWeight="normal"
              px={6}
            >
              View Repo
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCard;
