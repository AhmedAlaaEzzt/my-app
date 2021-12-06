import { getInvoices } from "../../database/invoices.js";
import "./invoices.css";
import { Link, Outlet } from "react-router-dom";
export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className="invoices-list">
      <nav>
        {invoices.map((invoice) => (
          <Link
            className="invoice"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
