import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/molecules";
import { cities } from "../data";

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

const PageOne = () => {
  // create component for flight info? (nonstop boolean, duration string, departure city, average price)

  return (
    <Container>
      <h1>Cities</h1>
      {cities?.length > 0 && (
        <StyledList>
          {cities?.map((city) => {
            const { name, slug, state } = city;
            return (
              <StyledListItem key={name}>
                <StyledLink to={`/cities/${slug}`}>
                  {name}, {state}
                </StyledLink>
              </StyledListItem>
            );
          })}
        </StyledList>
      )}
    </Container>
  );
};

export default PageOne;
