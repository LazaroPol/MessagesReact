import { useUserContext } from "./provider/UserProvider";
import Login from "./components/Login";
import Router from "./app/Router";

const App = () => {
  const [user] = useUserContext();
  return <div>{user ? <Router /> : <Login />}</div>;
};

export default App;
