import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  CityPage,
  LandingPage,
  LoginPage,
  PageNotFound,
  SuggestionsPage,
} from "../pages";
import { Header, SecureRoute, UnsecureRoute } from "../components";
import { useAuthState } from "../firebase";

const AppRouter = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <UnsecureRoute path="/" exact>
          <LoginPage />
        </UnsecureRoute>
        <SecureRoute path="/cities" exact>
          <LandingPage />
        </SecureRoute>
        <SecureRoute path="/cities/:city" exact>
          <CityPage />
        </SecureRoute>
        <SecureRoute path="/suggestions" exact>
          <SuggestionsPage />
        </SecureRoute>
        <SecureRoute>
          <PageNotFound />
        </SecureRoute>
      </Switch>
    </Router>
  );
};

export default AppRouter;
