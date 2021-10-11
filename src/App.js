import { AppRouter } from "./components";
import { AuthContextProvider } from "./firebase";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
