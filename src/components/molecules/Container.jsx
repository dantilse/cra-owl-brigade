import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
