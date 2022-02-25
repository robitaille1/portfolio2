import { Box, Stack, Heading } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";

const About = () => {
  return (
    <Box maxW="7xl" display={{ md: "flex" }} minHeight="70vh" w="full">
      <Stack py={{ base: 20, md: 28 }}>
        <Heading>Projects</Heading>
        <ProjectCard />
      </Stack>
    </Box>
  );
};

export default About;
