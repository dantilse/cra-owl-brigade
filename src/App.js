import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import PageOne from "./pages/page-1";
import PageTwo from "./pages/page-2";
import Nav from "./components/Nav";
import SecureRoute from "./components/SecureRoute";
import UnsecureRoute from "./components/UnsecureRoute";
import { AuthContextProvider } from "./firebase";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <SecureRoute path="/" exact component={Home} />
            <UnsecureRoute path="/login" exact component={Login} />
            <SecureRoute path="/page-1" exact component={PageOne} />
            <SecureRoute path="/page-2" exact component={PageTwo} />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
