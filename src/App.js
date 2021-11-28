import CardList from "./components/card-list/card-list";
// import { robots } from "./Data/robots";
import SearchBox from "./components/search-box/search-box";
import { Component } from "react";
import "./App.css";
import { setSearchField, requestRobots } from "./actions.js";
import { connect } from "react-redux";

//what state i should listen to? (mapStateToProps)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

//what dispatch or action is should listen to? (mapDispatchToProps)
const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: ()=> requestRobots(dispatch) 
});

class App extends Component {


  componentDidMount() {
    this.props.onRequestRobots()
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (robots.length) {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    } else if(isPending) {
      return <h1 className="tc">Loading.......</h1>;
    } else {
      return <h1 className="tc">Error.......</h1>;
    }
  }
}
//higher order functions
export default connect(mapStateToProps, mapDispatchToProps)(App);
