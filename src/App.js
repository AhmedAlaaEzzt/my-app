import './App.css';
import CardList from './components/card-list/card-list'
import data from './data/face-data';
function App() {
  return (
    <div className="">
      <div>
        <CardList cards={data}/>
      </div>
    </div>
  );
}

export default App;
