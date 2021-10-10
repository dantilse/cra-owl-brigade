import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "../firebase";
import logo from "../logo.svg";

const Home = () => {
  const { user } = useAuthState();
  const auth = getAuth();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => console.log("You have signed out"))
      .catch(console.error);
  };
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome {user?.email}</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
