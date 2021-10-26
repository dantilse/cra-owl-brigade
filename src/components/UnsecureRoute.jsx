import { Redirect, Route } from "react-router-dom";

const UnsecureRoute = ({ children, exact, isAuthenticated, path }) => {
  return !isAuthenticated ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to="/" />
  );
};

export default UnsecureRoute;
