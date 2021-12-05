import "./invoice.css";

const Invoice = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: ##amount</h2>
      <p>##name: ##number</p>
      <p>Due Date: ###due</p>
    </main>
  );
};

export default Invoice;
