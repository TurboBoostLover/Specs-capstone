import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Game from "./screens/Game";
import WishList from "./screens/WishList"

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
          <Route path="/game" exact>
            <Game />
          </Route>
          <Route path="/wishlist" exact>
            <WishList />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
