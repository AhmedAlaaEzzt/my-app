import { getInvoices } from "../../database/invoices.js";
import "./invoices.css";
import { NavLink, Outlet } from "react-router-dom";
export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className="invoices-list">
      <nav>
        {invoices.map((invoice) => (
          <NavLink
            className="invoice"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
