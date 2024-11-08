import { useUserContext } from "./provider/UserProvider";
import Login from "./components/Login";
import Router from "./app/Router";

const App = () => {
  const [token] = useUserContext();
  return <div>{token ? <Router /> : <Login />}</div>;
};

export default App;
