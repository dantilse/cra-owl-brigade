import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../firebase";

const SecureRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default SecureRoute;
