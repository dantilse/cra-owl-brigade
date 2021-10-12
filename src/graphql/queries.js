const citiesList = `
query GetCities {
  citiesCollection {
    items {
      description {
        json
      }
      slug
      title
      weather
      flights
    }
  }
}
`;

export { citiesList };
