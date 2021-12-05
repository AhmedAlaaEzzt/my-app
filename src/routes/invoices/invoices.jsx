import {getInvoices} from '../../database/invoices.js';
import './invoices.css';
export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className="invoices-list">
      <nav>
        {invoices.map(invoice =>(
          <div className='invoice'>{invoice.name}</div>
        ))}
      </nav>
    </div>
  );
}
