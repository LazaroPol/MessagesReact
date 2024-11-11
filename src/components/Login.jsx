import { useState } from "react";
import { useUserContext } from "../provider/UserProvider";
import { login } from "../services/api";

const Login = () => {
  const [user, setUser] = useState({});
  const [, setLoggedUser] = useUserContext();

  const handleLogin = async () => {
    console.log(99999999999, user);
    const usuario = await login(user.username, user.password);
    console.log("iddddddddddd", usuario.id);
    setLoggedUser({ id: usuario.id });
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
