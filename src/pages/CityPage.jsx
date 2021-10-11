import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { Container } from "../components/molecules";
import { cities } from "../data";

const City = () => {
  const { city } = useParams();
  const cityDetails = cities.find((item) => item.slug === city);
  const { name, state } = cityDetails;
  const cityDisplayName = name && state ? `${name}, ${state}` : "Unknown city";

  return (
    <Container>
      <NavLink to="/cities">&larr; Back to cities</NavLink>
      <p>This is the city page for {cityDisplayName}.</p>
    </Container>
  );
};

export default City;
