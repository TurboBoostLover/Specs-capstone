import { Route } from "react-router-dom";
import Login from "../components/Login";
import './Landing.css'

const Welcome = () => {
  return (
    <section>
      <h1 className="HotWheels">HotWheels DataBase</h1>
      <Route path="/welcome">
        <Login />
      </Route>
    </section>
  );
};

export default Welcome;