import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../firebase";

const UnsecureRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default UnsecureRoute;
