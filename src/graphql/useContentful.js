import { useEffect, useState } from "react";

const { REACT_APP_CONTENTFUL_ACCESS_TOKEN, REACT_APP_CONTENTFUL_SPACE_ID } =
  process?.env;

const useContentful = (queryString) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({
            query: queryString,
          }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          return setError(errors);
        }
        return setResponse(data);
      });
  }, [queryString]);

  return { error, response };
};

export default useContentful;
