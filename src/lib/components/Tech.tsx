import { Heading, Container, Grid, Text } from "@chakra-ui/react";
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaShopify,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { MdLineStyle } from "react-icons/md";
import TechCard from "./TechCard";

const tools = [
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "Javascript",
    description: "These days you can't build an amazing product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
  {
    name: "Shopify",
    description:
      "These days you can't build an amazing product without Shopify.",
    icon: <FaShopify fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "TypeScript",
    description: "These days you can't build an amazing product without TS.",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Next.js",
    description: "These days you can't build an amazing product without next.",
    icon: <SiNextdotjs fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "CSS Frameworks and Component Libraries",
    description: "SASS, Chakra UI, Material UI, Styled Components",
    icon: <MdLineStyle fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Node.js",
    description: "Chrome's V8 JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "Google Cloud",
    description: "Chrome's V8 JavaScript engine for server-side javascript.",
    icon: <DiGoogleCloudPlatform fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "SQL & MongoDB",
    description: "Both database are great, and they have their use cases.",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "GIT & Github",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://medium.com/swlh/things-about-git-and-github-you-need-to-know-as-developer-907baa0bed79",
  },
];

const Stack = () => {
  return (
    <Container maxW="7xl">
      <Heading as="h2" fontSize={{ base: "lg", sm: "xl", lg: "3xl" }} mb={3}>
        Primary Stack & Technologies
      </Heading>
      <Text lineHeight={1.5} color="gray.500">
        As a full-stack web developer there are alot of tools you use in your
        daily bases, these are primary tools that I use & like.
      </Text>
      <Grid mt={10} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={5}>
        {tools.map((tool) => (
          <TechCard {...tool} key={tool?.name} />
        ))}
      </Grid>
    </Container>
  );
};

export default Stack;
