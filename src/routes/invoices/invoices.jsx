import {getInvoices} from '../../database/invoices.js';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className="invoices-list">
      <nav>
        {invoices.map(invoice =>(
          <div>{invoice.name}</div>
        ))}
      </nav>
    </div>
  );
}
