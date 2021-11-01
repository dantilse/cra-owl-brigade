import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/molecules";
import { airports, months } from "../data";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(320px, 1fr));
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
  min-height: 100%;
  color: inherit;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: #f4f5f6;
  }
`;

const StyledH3 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px;
`;

const StyledWeatherRow = styled.div`
  padding: 15px;
  color: #454545;

  & + & {
    padding-top: 0;
  }

  > span {
    display: inline-block;
    font-size: 80%;

    ~ span {
      margin-left: 15px;
    }
  }
`;

const CitiesPage = ({ cities }) => {
  // create component for flight info? (nonstop boolean, duration string, departure city, average price)
  const [sortedCities, setSortedCities] = useState([]);
  const [month, setMonth] = useState(
    months.find((month) => month.value === "apr")
  );
  const [departureCity, setDepartureCity] = useState("mci");

  const handleOnChangeMonth = (e) => {
    const newMonth = months.find((month) => month.value === e.target.value);

    setMonth(newMonth);
  };

  const handleOnChangeDepartureCity = (e) => {
    setDepartureCity(e.target.value);
  };

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
      <form style={{ marginBottom: "15px" }}>
        <select onChange={handleOnChangeMonth} value={month.value}>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
        <select onChange={handleOnChangeDepartureCity} value={departureCity}>
          {airports.map((airport) => {
            const { label, value } = airport;
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </form>
      {!cities && <h1>Loading...</h1>}
      {sortedCities?.length > 0 ? (
        <StyledList>
          {sortedCities?.map((city) => {
            const { title, slug, weather, flights } = city;
            return (
              <StyledListItem key={title}>
                <StyledLink to={`/cities/${slug}`}>
                  <StyledH3>{title}</StyledH3>
                  {weather && (
                    <StyledWeatherRow>
                      <span title={`Average high temperature for ${month}`}>
                        ☀️&nbsp;&nbsp;{weather?.[month?.value]?.high}
                      </span>
                      <span>❄️&nbsp;&nbsp;{weather?.[month?.value]?.low}</span>
                      <span>🌧️&nbsp;&nbsp;{weather?.[month?.value]?.rain}</span>
                    </StyledWeatherRow>
                  )}
                  <StyledWeatherRow>
                    {flights?.[departureCity] ? (
                      <>
                        <span title="Earliest arrival time">
                          🛬&nbsp;&nbsp;{flights[departureCity].arrival}
                        </span>
                        <span title="Latest departure time">
                          🛫&nbsp;&nbsp;{flights[departureCity].departure}
                        </span>
                        <span title="Average flight cost">
                          💰&nbsp;&nbsp;{flights[departureCity].price}
                        </span>
                      </>
                    ) : (
                      <small>No airline data to display</small>
                    )}
                  </StyledWeatherRow>
                </StyledLink>
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

export default CitiesPage;
