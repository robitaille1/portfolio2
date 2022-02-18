import {
  Heading,
  Container,
  List,
  ListItem,
  ListIcon,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const Timeline = () => {
  return (
    <Container mt="50px !important" maxW="7xl">
      <Heading as="h2" fontSize={{ base: "lg", sm: "xl", lg: "3xl" }} mb={3}>
        Experience
      </Heading>
      <Heading display="flex" alignItems={"center"} as="h2" size="md">
        4ocean <Icon mt="3px" as={BsDot} /> 06.2020 - Current
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
          flowcharts, layouts, diagrams, charts, code comments, and clear code.
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        Freelance/Contract Development
      </Heading>
      <List spacing={18} fontSize="16">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Working in a team to create large-scale web applications, based on
          client and UI specifications.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="blue.700" />
          Execute all levels of testing (System, Integration, and Regression)
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