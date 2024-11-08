import { useState } from "react";
import { useUserContext } from "../provider/UserProvider";
import { login } from "../services/api";

const Login = () => {
  const [user, setUser] = useState();
  const [, setToken] = useUserContext();

  const handleLogin = async () => {
    const token = await login(user.username, user.password);
    setToken(token);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button onClick={handleLogin}>Access</button>
    </div>
  );
};

export default Login;
