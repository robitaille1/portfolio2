import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Solar Power New England",
    description:
      "Contracted to build out the initial web presence for a growing solar power start-up based in New England.",
    tags: ["React", "Strapi CMS", "Chakra UI", "Cloudinary"],
    live: "https://www.solarpowernewengland.com/",
    repo: "https://github.com/robitaille1/solar-ne",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1646171739/SPNE-1646171699292_vae5i8.png",
  },
  {
    name: "Polka Dot Print Shop",
    description:
      "One of the many projects I worked on while contracting. I rebuilt the frontend of the theme by creating reusable modules that allow the client to make changes easily.",
    tags: ["Shopify Liquid", "SASS"],
    live: "https://polkadotprintshop.com/",
    repo: "",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1646171925/PDPS-1646171913723_nwr8s3.png",
  },
  {
    name: "Austin Mask Exchange",
    description:
      "Assisting the Austin Mask Exchange by creating a Website for facilitating the creation and procurement of masks in the greater Austin area.",
    tags: ["React", "Gatsby", "Styled Components"],
    live: "https://atx-mask-exchange.netlify.app/",
    repo: "https://github.com/robitaille1/atx-mask-exchange",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1646172154/ATXME-1646172137979_zf9rwg.png",
  },
  {
    name: "PUERH / CAFE",
    description:
      "An app that helps users organize their pu’erh teas by adding collections and tasting notes. Keep track of how your teas age, and how the flavor profile changes over time.",
    tags: ["React", "Node Js", "Express", "PostgreSQL"],
    live: "https://puerh-cafe.lucasrobitaille.vercel.app/",
    repo: "https://github.com/robitaille1/puerh-cafe",
    image:
      "https://res.cloudinary.com/robitaille/image/upload/v1646172388/puerh-1646172375085_hug0vr.png",
  },
];

export default function Projects() {
  return (
    <Container maxW="7xl">
      <Stack
        align="start"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction="column"
      >
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
          marginTop="7px !important"
          color={useColorModeValue("gray.700", "gray.400")}
          w={"90%"}
        >
          Throughout my career, I have always wanted to be involved with great
          organizations and to work on projects that help further their growth.
          These are a few of the projects that I've had the pleasure to be a
          part of, outside of my full-time roles.
        </Text>

        {projects.map((project) => (
          <ProjectCard {...project} key={project?.name} />
        ))}
      </Stack>
    </Container>
  );
}
