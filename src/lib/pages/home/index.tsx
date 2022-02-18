import { Box, Stack } from "@chakra-ui/react";

import Hero from "../../components/Hero";
import Tech from "../../components/Tech";
import Experience from "../../components/Experience";

const Home = () => {
  return (
    <Box display={{ md: "flex" }} minHeight="70vh" w="full">
      <Stack>
        <Hero />
        <Tech />
        <Experience />
      </Stack>
    </Box>
  );
};

export default Home;
