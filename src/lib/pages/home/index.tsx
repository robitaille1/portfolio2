import { Box, Stack } from "@chakra-ui/react";

import Experience from "../../components/Experience";
import Hero from "../../components/Hero";
import Tech from "../../components/Tech";

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
