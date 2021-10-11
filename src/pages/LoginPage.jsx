import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Container } from "../components/molecules";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleOnChangeEmail = (e) => setEmail(e.target?.value);
  const handleOnChangePassword = (e) => setPassword(e.target?.value);
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(`User signed in.`, { user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
    // clear state
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          id="username"
          value={email}
          onChange={handleOnChangeEmail}
          placeholder="User name"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleOnChangePassword}
          placeholder="Password"
        />
        <button type="submit" onClick={handleLogIn}>
          Log in
        </button>
      </form>
    </Container>
  );
};

export default Login;
