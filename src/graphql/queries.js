const citiesList = `
query GetCities {
  citiesCollection {
    items {
      description {
        json
      }
      slug
      title
    }
  }
}
`;

export { citiesList };
