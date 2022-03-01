import {
  Heading,
  Container,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaShopify,
} from "react-icons/fa";
import { MdLineStyle } from "react-icons/md";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

import TechCard from "./TechCard";

const tools = [
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
  },
  {
    name: "Javascript",
    description: "Client side scripting to make dynamic interactive pages.",
    icon: <FaJs fontSize="20px" />,
  },
  {
    name: "Shopify",
    description: "Building custom ecommerce sites for Shopify stores.",
    icon: <FaShopify fontSize="20px" />,
  },
  {
    name: "TypeScript",
    description:
      "Object-oriented javascript, very helpful in larger scale apps.",
    icon: <SiTypescript fontSize="20px" />,
  },
  {
    name: "Next.js",
    description:
      "One of my favorite react frameworks, especially for server-side rendering.",
    icon: <SiNextdotjs fontSize="20px" />,
  },
  {
    name: "CSS Frameworks and Component Libraries",
    description: "SASS, Chakra UI, Material UI, Styled Components",
    icon: <MdLineStyle fontSize="20px" />,
  },
  {
    name: "Node.js",
    description: "JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
  },
  {
    name: "Google Cloud",
    description: "My choice for cloud computing services.",
    icon: <DiGoogleCloudPlatform fontSize="20px" />,
  },
  {
    name: "SQL & MongoDB",
    description: "Different databases for different use cases!",
    icon: <FaDatabase fontSize="20px" />,
  },
  {
    name: "GIT & Github",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
  },
];

const Stack = () => {
  return (
    <Container maxW="7xl">
      <Heading as="h2" fontSize={{ base: "lg", sm: "xl", lg: "3xl" }} mb={3}>
        Primary Stack & Technologies
      </Heading>
      <Text lineHeight={1.5} color={useColorModeValue("gray.700", "gray.400")}>
        As a software engineer, there are many different tools that can be used
        on a daily basis. I love taking on new technologies to further my skill
        set. These are the primary tools that I use most often.
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
