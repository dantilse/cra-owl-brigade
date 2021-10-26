import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Redirect, useParams } from "react-router";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container } from "../components/molecules";
import { useOpenTripMap } from "../hooks";

const StyledDescription = styled.div`
  line-height: 1.5;
  font-size: 125%;
`;

const CityDetails = ({ cityDetails }) => {
  const { description = "", title = "" } = cityDetails;
  const { error, isLoading, payload } = useOpenTripMap();

  useEffect(() => {
    console.log({ error, isLoading, payload });
  }, [error, isLoading, payload]);

  return (
    <Container>
      {cityDetails && (
        <>
          <NavLink to="/cities">&larr; Back to cities</NavLink>
          <h1>{title}</h1>
          <StyledDescription>
            {documentToReactComponents(description.json)}
          </StyledDescription>
        </>
      )}
    </Container>
  );
};

const City = ({ cities }) => {
  const { city } = useParams();
  console.log({ city });
  const cityDetails = cities?.find((item) => item.slug === city);

  return !!cityDetails ? (
    <CityDetails cityDetails={cityDetails} />
  ) : (
    <Redirect to="/" />
  );
};

export default City;
