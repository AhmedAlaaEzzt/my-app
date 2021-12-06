import { getInvoices } from "../../database/invoices.js";
import "./invoices.css";
import { NavLink, Outlet, useSearchParams,useLocation } from "react-router-dom";


function MyCustomLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="invoices-list">
      <nav>
        <input
          value={searchParams.get("filter") || ""}
          onChange={handleChange}
        />

        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;

            return invoice.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map((invoice) => (
            <MyCustomLink
              className="invoice"
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </MyCustomLink>
          ))}
          
      </nav>
      <Outlet />
    </div>
  );
}
