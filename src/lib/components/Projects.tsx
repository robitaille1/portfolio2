import {
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  SlideFade,
  Box,
} from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "NFT.com",
    description:
      "Part of the Frontend team building out a new social NFT marketplace.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "GraphQL",
      "Cypress",
      "Storybook",
      "ethers.js",
    ],
    live: "https://nft.com",
    repo: "",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1683846194/screely-1683845919971_wph91v.png",
    delay: 0.2,
  },
  {
    name: "Solar Power New England",
    description:
      "Contracted to build out the initial web presence for a growing solar power start-up based in New England.",
    tags: ["React", "Strapi CMS", "Chakra UI", "Cloudinary"],
    live: "https://www.solarpowernewengland.com/",
    repo: "https://github.com/robitaille1/solar-ne",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1646171739/SPNE-1646171699292_vae5i8.png",
    delay: 0.3,
  },
  {
    name: "ByHeart Cluster",
    description:
      "Part of the team that built out a new social media platform for new parents.",
    tags: ["React", "Typescript", "Firebase", "Algolia", "Storybook"],
    live: "https://cluster.byheart.com/",
    repo: "",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1683846290/screely-1683846278170_zpfal0.png",
    delay: 0.4,
  },
  {
    name: "Polka Dot Print Shop",
    description:
      "One of the many eCommerce projects I worked on while contracting. I rebuilt the frontend of the theme by creating reusable modules that allow the client to make changes easily.",
    tags: ["Shopify Liquid", "SASS"],
    live: "https://polkadotprintshop.com/",
    repo: "",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1646171925/PDPS-1646171913723_nwr8s3.png",
    delay: 0.5,
  },
];

export default function Projects() {
  return (
    <Container p={0} maxW="7xl">
      <Stack
        align="start"
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 5, md: 28 }}
        pb={{ base: 20, md: 28 }}
        direction="column"
      >
        <SlideFade in offsetY={80}>
          <Heading
            as="h2"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", lg: "4xl" }}
          >
            Projects{" "}
            <Text as="span" role="img" aria-label="pin">
              &#x1f468;
            </Text>
            <Text as="span" role="img" aria-label="pin">
              &#x200d;
            </Text>
            <Text as="span" role="img" aria-label="pin">
              &#x1f4bb;
            </Text>
          </Heading>
          <Text
            mt={3}
            color={useColorModeValue("gray.700", "gray.400")}
            w={{ base: "100%", md: "90%" }}
          >
            Throughout my career, I have always wanted to be involved with great
            organizations and to work on projects that help further their
            growth. These are a few of the projects that I&apos;ve had the
            pleasure to be a part of, outside of my full-time roles.
          </Text>
          <Text
            mt={4}
            color={useColorModeValue("gray.700", "gray.400")}
            w={{ base: "100%", md: "90%" }}
          >
            Please reach out if you would like further examples of my work. I
            have other projects that I&apos;ve worked on that I&apos;m unable to
            include in my public portfolio.
          </Text>
        </SlideFade>

        <Box marginTop="0 !important">
          {projects.map((project) => (
            <ProjectCard {...project} key={project?.name} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
