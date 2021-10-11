import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container, LogOutButton } from "./molecules";

const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  color: inherit;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  & + & {
    margin-left: 20px;
  }

  &.active {
    color: #61dafb;
  }

  &:hover {
    background-color: #f4f5f6;
  }
`;

const AuthenticatedNav = () => {
  return (
    <nav>
      <StyledNavLink activeClassName="active" to="/cities" exact>
        Cities
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/suggestions">
        Suggestions
      </StyledNavLink>
    </nav>
  );
};

const Header = ({ isAuthenticated }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        {isAuthenticated ? (
          <>
            <AuthenticatedNav />
            <LogOutButton />
          </>
        ) : (
          <StyledNavLink activeClassName="active" to="/" exact>
            Login
          </StyledNavLink>
        )}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
