import { getAuth, signOut } from "firebase/auth";

const LogOutButton = () => {
  const auth = getAuth();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => console.log("You have signed out"))
      .catch(console.error);
  };
  return (
    <button type="button" onClick={handleLogOut}>
      Log out
    </button>
  );
};

export default LogOutButton;
