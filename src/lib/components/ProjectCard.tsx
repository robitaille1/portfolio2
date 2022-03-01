import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
  useColorMode,
  Tag,
} from "@chakra-ui/react";

type Project = {
  name: string;
  description: string;
  tags: string[];
  live: string;
  repo: string;
  image: string;
};

const ProjectCard = ({
  name,
  description,
  tags,
  live,
  repo,
  image,
}: Project) => {
  const { colorMode } = useColorMode();
  return (
    <Center py={6} marginTop="0 !important">
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        w="100%"
        height={{ sm: "max-content", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="2xl"
        padding={4}
      >
        <Flex flex={1}>
          <Image objectFit="contain" boxSize="100%" src={image} />
        </Flex>
        <Flex flex={1} flexDirection="column" justifyContent="start" p={1}>
          <Heading
            px={{ base: 0, md: 4 }}
            my={2}
            fontSize="xl"
            fontFamily="body"
          >
            {name}
          </Heading>
          <Text
            textAlign="left"
            color={useColorModeValue("gray.700", "gray.400")}
            px={{ base: 0, md: 4 }}
          >
            {description}
          </Text>
          <Flex
            px={{ base: 0, md: 3 }}
            align="center"
            justify="start"
            direction="row"
            mt={3}
            wrap="wrap"
          >
            {tags.map((tag) => (
              <Tag
                mx={1}
                mt={2}
                size="sm"
                variant="solid"
                bg="blue.700"
                _dark={{ bg: "blue.800" }}
                key={tag}
              >
                {tag}
              </Tag>
            ))}
          </Flex>

          <Flex
            width="100%"
            mt={3}
            direction="row"
            pt={2}
            px={{ base: 0, md: 4 }}
            justifyContent="start"
            alignItems="center"
          >
            {live && (
              <Link isExternal href={live}>
                <Button
                  size="md"
                  fontWeight="normal"
                  rounded="lg"
                  px={6}
                  mr={3}
                  colorScheme="blue"
                  bg={colorMode === "light" ? "blue.800" : "white"}
                  _hover={{
                    bg: colorMode === "light" ? "blue.700" : "gray.300",
                  }}
                  fontSize="sm"
                >
                  View Live
                </Button>
              </Link>
            )}
            {repo && (
              <Link isExternal href={repo}>
                <Button
                  fontSize="sm"
                  rounded="lg"
                  size="md"
                  fontWeight="normal"
                  px={6}
                >
                  View Repo
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProjectCard;
