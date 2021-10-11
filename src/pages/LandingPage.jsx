import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/molecules";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
  grid-gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 0;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 15px;
  color: inherit;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #61dafb;
    background-color: #f4f5f6;
  }
`;

const LandingPage = ({ cities }) => {
  // create component for flight info? (nonstop boolean, duration string, departure city, average price)

  const [sortedCities, setSortedCities] = useState([]);

  useEffect(() => {
    if (cities) {
      const tempSortedCities = cities.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      setSortedCities(tempSortedCities);
    }
  }, [cities]);

  return (
    <Container>
      <h1>Cities</h1>
      {!cities && <h1>Loading...</h1>}
      {sortedCities?.length > 0 ? (
        <StyledList>
          {sortedCities?.map((city) => {
            const { title, slug } = city;
            return (
              <StyledListItem key={title}>
                <StyledLink to={`/cities/${slug}`}>{title}</StyledLink>
              </StyledListItem>
            );
          })}
        </StyledList>
      ) : (
        <p>No cities to display.</p>
      )}
    </Container>
  );
};

export default LandingPage;
