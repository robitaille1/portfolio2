import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorMode,
  Link,
  Image,
  Box,
} from "@chakra-ui/react";

export default function Hero() {
  const { colorMode } = useColorMode();
  return (
    <Container maxW="7xl">
      <Stack
        align="start"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          >
            Lucas Robitaille
          </Heading>
          <Text fontSize="xl" marginTop="0px !important">
            Software Engineer
            <Text as="span" role="img" aria-label="pin">
              &#x1F4CD;
            </Text>
            California
          </Text>
          <Text marginTop="7px !important" color="gray.500" pr={10}>
            I am a creative, problem solving software engineer. I love working
            in teams and contributing to projects that I feel passionate about.
            Creating dynamic, responsive, and interactive web apps is what I do
            best.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            marginTop="20px !important"
          >
            <Button
              size="lg"
              fontWeight="normal"
              rounded="lg"
              px={6}
              colorScheme="blue"
              bg={colorMode === "light" ? "blue.800" : "white"}
              _hover={{ bg: colorMode === "light" ? "blue.700" : "gray.300" }}
              fontSize="sm"
            >
              My Work
            </Button>
            <Link href="mailto:lucas.robitaille@yahoo.com">
              <Button
                fontSize="sm"
                rounded="lg"
                size="lg"
                fontWeight="normal"
                px={6}
              >
                Reach out!
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex flex={1} w="full" pt={5}>
          <Box
            boxSize="150px"
            bgGradient={
              colorMode === "light"
                ? "linear(gray.600 0%,  white 100%)"
                : "linear(white 0%,  gray.600 100%)"
            }
            borderRadius="lg"
          >
            <Image borderRadius="lg" src="/me.png" alt="Lucas Robitaille" />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
