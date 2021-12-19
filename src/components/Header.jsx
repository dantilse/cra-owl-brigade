import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container, LogOutButton } from "./molecules";

const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
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
  border-bottom: 1px solid transparent;
  transition: all 150ms ease-in-out;

  & + & {
    margin-left: 20px;
  }

  &.active {
    border-bottom-color: #61dafb;
  }

  &:hover {
    background-color: #f4f5f6;
  }
`;

const AuthenticatedNav = () => {
  return (
    <nav>
      <StyledNavLink activeClassName="active" to="/" exact>
        Home
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/cities">
        Cities
      </StyledNavLink>
      {/* <StyledNavLink activeClassName="active" to="/suggestions">
        Suggestions
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/calendar">
        Calendar
      </StyledNavLink>
      <StyledNavLink activeClassName="active" to="/profile">
        Profile
      </StyledNavLink> */}
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
          <StyledNavLink activeClassName="active" to="/login" exact>
            Login
          </StyledNavLink>
        )}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
