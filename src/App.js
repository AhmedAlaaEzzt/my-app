import CardList from "./components/card-list/card-list";
// import { robots } from "./Data/robots";
import SearchBox from "./components/search-box/search-box";
import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };

    console.log("constructor");
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response =>{
         return response.json();
      })
      .then(users => {
        setTimeout(()=>this.setState({robots: users}), 3000)
        
      })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

  };

  render() {
    console.log("render");
    const filteredRobots = this.state.robots.filter((robot) => {
      if (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return robot;
    });
    if(this.state.robots.length){
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }else{
      return (<h1 className="tc">Loading.......</h1>)
    }

  }
}

export default App;
