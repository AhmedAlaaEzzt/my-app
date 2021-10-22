import "./App.css";
import CardList from "./Components/card-list/card-list";
import Form from "./Components/form/From";
import { Component } from "react";
class App extends Component {
  state={cards:[]}
  addNewUser=(user)=>{
    this.setState(prevState => ({
      cards: prevState.cards.concat(user)
    }))
  }
  render(){
    return (
      <div className="">
        <div style={{margin:"20px"}}>
          <Form onSubmit={this.addNewUser}/>
          <CardList cards={this.state.cards} />
        </div>
      </div>
    );
  }

}

export default App;
