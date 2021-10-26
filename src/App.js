import "./App.css";
import CardList from "./components/card-list/card-list";
import data from "./data/face-data";
import Form from "./components/form/From";
function App() {
  return (
    <div className="">
      <div style={{margin:"20px"}}>
        <Form />
        <CardList cards={data} />
      </div>
    </div>
  );
}

export default App;
