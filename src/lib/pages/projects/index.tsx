import { Box, Stack, Heading } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";

const About = () => {
  return (
    <Box display={{ md: "flex" }} minHeight="70vh" w="full">
      <Stack>
        <Heading>Projects</Heading>
        <ProjectCard />
      </Stack>
    </Box>
  );
};

export default About;
