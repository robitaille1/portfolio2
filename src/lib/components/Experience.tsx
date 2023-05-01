import {
  Heading,
  Container,
  List,
  ListItem,
  ListIcon,
  Text,
  Icon,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <Container p={0} mt="50px !important" maxW="7xl">
      <Heading as="h2" fontSize={{ base: "lg", sm: "xl", lg: "3xl" }} mb={3}>
        Experience
      </Heading>
      <Heading display="flex" alignItems="center" as="h2" size="md">
        NFT.com / Immutable Holdings <Icon mt="3px" as={BsDot} /> 06.2022 -
        Current
      </Heading>
      <Text mb={5}>Senior Frontend Software Engineer</Text>
      <List spacing={18} fontSize="16">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Working with Next.js, React, Tailwind css to build the NFT.com
          platform.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Creating web applications that interact with the blockchain and
          leading the development of our proprietary protocol
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Helping to define the technical direction and vision for maintaining
          and scaling our web product for long-term success
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Collaborating across teams with UI/UX designers and product to
          implement great user interfaces
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Participating in code reviews, project leadership, and maintaining
          documentation.
        </ListItem>
      </List>
      <Heading mt={10} display="flex" alignItems="center" as="h2" size="md">
        4ocean <Icon mt="3px" as={BsDot} /> 06.2020 - 06.2022
      </Heading>
      <Text mb={5}>Software Engineer</Text>
      <List spacing={18} fontSize="16">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Working in a small diverse team to maintain our retail eCommerce
          experience and develop new features.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Developing applications to further collaboration between internal
          teams and creating external applications to further the brand and its
          mission.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Documenting and maintaining solutions by developing documentation,
          flowcharts, layouts, diagrams, code comments, and clear code.
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        Freelance/Contract Development
      </Heading>
      <List spacing={18} fontSize="16">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Working in a team to create large-scale Javascript web applications,
          based on client requirements and UI specifications.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Execute all levels of testing (System, Integration, Browser and
          Regression)
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Creating Shopify eCommerce experiences for retailers that are
          mobile-first and increase conversion.
        </ListItem>
      </List>
    </Container>
  );
};

export default Timeline;
