import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorMode,
  Link as ReachLink,
  Image,
  Box,
  AspectRatio,
  useColorModeValue,
  SlideFade,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Hero() {
  const { colorMode } = useColorMode();
  return (
    <SlideFade in offsetY={80}>
      <Container p={0} maxW="7xl">
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
            <Text
              marginTop="7px !important"
              color={useColorModeValue("gray.700", "gray.400")}
              pr={{ base: 0, md: 10 }}
            >
              I am a creative, problem-solving software engineer. I love working
              in teams and contributing to projects that I feel passionate
              about. Creating dynamic, responsive, and interactive web apps is
              what I do best.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
              marginTop="20px !important"
            >
              <Link passHref href="/projects">
                <Button
                  size="lg"
                  fontWeight="normal"
                  rounded="lg"
                  px={6}
                  colorScheme="blue"
                  bg={colorMode === "light" ? "blue.800" : "white"}
                  _hover={{
                    bg: colorMode === "light" ? "blue.700" : "gray.300",
                  }}
                  fontSize="sm"
                >
                  My Work
                </Button>
              </Link>
              <ReachLink href="mailto:lucas@robitaille.xyz">
                <Button
                  fontSize="sm"
                  rounded="lg"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  w="100%"
                >
                  Reach out!
                </Button>
              </ReachLink>
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
              <AspectRatio maxW="150px" ratio={1}>
                <Image
                  fit="contain"
                  borderRadius="lg"
                  src="/me.jpg"
                  alt="Lucas Robitaille"
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </SlideFade>
  );
}
