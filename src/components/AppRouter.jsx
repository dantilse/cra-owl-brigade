import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  CityPage,
  LandingPage,
  LoadingPage,
  LoginPage,
  PageNotFound,
  SuggestionsPage,
} from "../pages";
import { Header, SecureRoute, UnsecureRoute } from "../components";
import { useAuthState } from "../firebase";
import useContentful, { citiesList } from "../graphql";

const AppRouter = () => {
  const { isAuthenticated, isLoading } = useAuthState();
  const { response: citiesResponse } = useContentful(citiesList);

  const cities = citiesResponse?.citiesCollection?.items;

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Switch>
        <UnsecureRoute path="/" exact>
          <LoginPage />
        </UnsecureRoute>
        <SecureRoute path="/cities" exact>
          <LandingPage cities={cities} />
        </SecureRoute>
        <SecureRoute path="/cities/:city" exact>
          <CityPage cities={cities} />
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
