import styled from "styled-components";
import { Container } from "../components/molecules";

const StyledLoader = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 125%;
`;

const LoadingPage = () => {
  return (
    <Container>
      <StyledLoader>Loading...</StyledLoader>
    </Container>
  );
};

export default LoadingPage;
