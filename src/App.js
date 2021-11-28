import CardList from "./components/card-list/card-list";
// import { robots } from "./Data/robots";
import SearchBox from "./components/search-box/search-box";
import { Component } from "react";
import "./App.css";
import { setSearchField } from "./actions.js";
import { connect } from "react-redux";

//what state i should listen to? (mapStateToProps)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

//what dispatch or action is should listen to? (mapDispatchToProps)
const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      // searchField: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setTimeout(() => this.setState({ robots: users }), 0);
      });
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };

  render() {
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (this.state.robots.length) {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    } else {
      return <h1 className="tc">Loading.......</h1>;
    }
  }
}
//higher order functions
export default connect(mapStateToProps, mapDispatchToProps)(App);
