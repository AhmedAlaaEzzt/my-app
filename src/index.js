import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Expenses from "./routes/expensives/expensives.jsx";
import Invoices from "./routes/invoices/invoices.jsx";
import PageNotFound from "./routes/page-not-found/page-not-found.jsx";
import Invoice from "./routes/invoice/invoice.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} >
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
