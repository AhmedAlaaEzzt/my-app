import "./App.css";
import About from "./pages/about/about.page";
import Users from "./pages/users/users.page";
import Home from "./pages/home/home.page";
import { BrowserRouter,Switch,Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
