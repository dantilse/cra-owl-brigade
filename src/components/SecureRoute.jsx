import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../firebase";

const SecureRoute = ({ children, exact, path }) => {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to="/" />
  );
};

export default SecureRoute;
