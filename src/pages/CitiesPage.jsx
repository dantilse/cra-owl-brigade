import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/molecules";
import Arrow from "../icons/arrow";
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

const StyledPanel = styled.div`
  display: block;
  min-height: 100%;
  color: inherit;
`;

const StyledPanelHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledFlightsLink = styled.a`
  display: inline-flex;
  padding: 5px;
  margin-left: -5px;
  color: inherit;
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:any-link {
    &:hover {
      background-color: #f5f5f5;
    }
  }

  span + span {
    margin-left: 5px;
  }

  svg {
    width: 1em;
    margin-left: 1em;
  }
`;

const StyledForm = styled.form`
  display: flex;
  margin-bottom: 15px;
`;

const StyledFormGroup = styled.div`
  & + & {
    margin-left: 1em;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  display: block;
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
      <StyledForm>
        <StyledFormGroup>
          <StyledLabel htmlFor="departure">Departure city</StyledLabel>
          <StyledSelect
            onChange={handleOnChangeDepartureCity}
            value={departureCity}
          >
            {airports.map((airport) => {
              const { label, value } = airport;
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </StyledSelect>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="month">Month</StyledLabel>
          <StyledSelect
            id="month"
            onChange={handleOnChangeMonth}
            value={month.value}
          >
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </StyledSelect>
        </StyledFormGroup>
      </StyledForm>
      {!cities && <h1>Loading...</h1>}
      {sortedCities?.length > 0 ? (
        <StyledList>
          {sortedCities?.map((city) => {
            const { title, slug, weather, flights } = city;
            return (
              <StyledListItem key={title}>
                <StyledPanel>
                  <StyledPanelHeading>
                    <Link to={`/cities/${slug}`}>{title}</Link>
                  </StyledPanelHeading>
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
                      <StyledFlightsLink
                        href={flights?.[departureCity]?.url || null}
                        target="_blank"
                        rel="noopener norefferrer"
                      >
                        <span title="Earliest arrival time">
                          🛬&nbsp;&nbsp;{flights[departureCity].arrival}
                        </span>
                        <span title="Latest departure time">
                          🛫&nbsp;&nbsp;{flights[departureCity].departure}
                        </span>
                        <span title="Average flight cost">
                          💰&nbsp;&nbsp;{flights[departureCity].price}
                        </span>
                        <Arrow />
                      </StyledFlightsLink>
                    ) : (
                      <small>No airline data to display</small>
                    )}
                  </StyledWeatherRow>
                </StyledPanel>
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
