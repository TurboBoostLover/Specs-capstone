import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home"
import Signup from "./screens/Signup";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="./welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
