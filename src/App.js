import "./App.css";
import About from "./pages/about/about.page";
import Users from "./pages/users/users.page";
import Home from "./pages/home/home.page";
import { BrowserRouter, Route } from "react-router-dom";
import { users } from "./data/fack-users.js";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users users={users} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
