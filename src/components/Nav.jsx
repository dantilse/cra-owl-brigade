import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "../firebase";

const StyledNav = styled.nav`
  padding: 20px;
  border-bottom: 1px solid grey;
`;

const StyledLink = styled(NavLink)`
  color: #61dafb;

  & + & {
    margin-left: 20px;
  }

  &.active {
    color: red;
  }
`;

const Nav = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <StyledNav>
      {isAuthenticated ? (
        <>
          <StyledLink activeClassName="active" to="/" exact>
            Home
          </StyledLink>
          <StyledLink activeClassName="active" to="/page-1" exact>
            Page 1
          </StyledLink>
          <StyledLink activeClassName="active" to="/page-2" exact>
            Page 2
          </StyledLink>
        </>
      ) : (
        <StyledLink activeClassName="active" to="/login" exact>
          Login
        </StyledLink>
      )}
    </StyledNav>
  );
};

export default Nav;
