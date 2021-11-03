import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  CalendarPage,
  CitiesPage,
  CityPage,
  LandingPage,
  LoadingPage,
  LoginPage,
  PageNotFound,
  ProfilePage,
  SuggestionsPage,
} from "../pages";
import { Header, SecureRoute, UnsecureRoute } from ".";
import { Container } from "./molecules";
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
        <SecureRoute isAuthenticated={isAuthenticated} path="/" exact>
          <LandingPage cities={cities} />
        </SecureRoute>
        <UnsecureRoute isAuthenticated={isAuthenticated} path="/login" exact>
          <LoginPage />
        </UnsecureRoute>
        <SecureRoute isAuthenticated={isAuthenticated} path="/calendar" exact>
          <CalendarPage cities={cities} />
        </SecureRoute>
        <SecureRoute isAuthenticated={isAuthenticated} path="/profile" exact>
          <ProfilePage />
        </SecureRoute>
        <SecureRoute
          isAuthenticated={isAuthenticated}
          path="/suggestions"
          exact
        >
          <SuggestionsPage />
        </SecureRoute>
        <SecureRoute isAuthenticated={isAuthenticated} path="/cities" exact>
          <CitiesPage cities={cities} />
        </SecureRoute>
        <SecureRoute
          isAuthenticated={isAuthenticated}
          path="/cities/:city"
          exact
        >
          <CityPage cities={cities} />
        </SecureRoute>
        <SecureRoute path="/success" isAuthenticated={isAuthenticated} exact>
          <Container>
            <p>Success page</p>
          </Container>
        </SecureRoute>
        <SecureRoute isAuthenticated={isAuthenticated}>
          <PageNotFound />
        </SecureRoute>
      </Switch>
    </Router>
  );
};

export default AppRouter;
