import { Route } from "react-router-dom";
import Login from "../components/Login";
import { Rainbow } from "../components/Rainbow";
import "../styles/Landing.css";

const Welcome = () => {
  return (
    <section>
      <h1 className="HotWheels">HotWheels DataBase</h1>
      <Rainbow />
      <Route path="/welcome">
        <Login />
      </Route>
    </section>
  );
};

export default Welcome;
