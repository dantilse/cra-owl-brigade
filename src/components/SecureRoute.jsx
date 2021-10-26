import { Redirect, Route } from "react-router-dom";

const SecureRoute = ({ children, exact, isAuthenticated, path }) => {
  return isAuthenticated ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default SecureRoute;
