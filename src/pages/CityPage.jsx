import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container } from "../components/molecules";

const StyledDescription = styled.div`
  line-height: 1.5;
  font-size: 125%;
`;

const City = ({ cities }) => {
  const { city } = useParams();
  const cityDetails = cities.find((item) => item.slug === city);
  const { description, title } = cityDetails;

  return (
    <Container>
      <NavLink to="/cities">&larr; Back to cities</NavLink>
      <h1>{title}</h1>
      <StyledDescription>
        {documentToReactComponents(description.json)}
      </StyledDescription>
    </Container>
  );
};

export default City;
