import { AppRouter } from "./components";
import { AuthContextProvider } from "./firebase";
import ApolloProviderWithClient from "./graphql/ApolloProviderWithClient";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <ApolloProviderWithClient>
        <AppRouter />
      </ApolloProviderWithClient>
    </AuthContextProvider>
  );
}

export default App;
