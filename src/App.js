import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="book-keeper">
      <h1>Bookkeeper!</h1>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </div>
  );
}

export default App;
