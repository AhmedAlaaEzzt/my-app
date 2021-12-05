import "./App.css";
import {Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="book-keeper">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
