import { Container, Stack, Heading, Text, Box } from "@chakra-ui/react";
import Projects from "lib/components/Projects";

const About = () => {
  return (
    <Box display={{ md: "flex" }} minHeight="70vh" w="full">
      <Stack>
        <Projects />
      </Stack>
    </Box>
  );
};

export default About;
