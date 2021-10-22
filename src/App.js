import "./App.css";
import CardList from "./Components/card-list/card-list";
import data from "./data/face-data";
import Form from "./Components/form/From";
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
