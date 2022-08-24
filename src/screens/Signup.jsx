import { Route } from "react-router-dom";
import Signups from "../components/Signup";
import "../styles/Landing.css";

const Signup = () => {
  return (
    <section>
      <h1 className="HotWheels">HotWheels DataBase</h1>
      <Route path="/signup">
        <Signups />
      </Route>
    </section>
  );
};

export default Signup;
