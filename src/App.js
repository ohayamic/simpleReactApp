import React from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import UserButton from "./components/UserButton";
import "./App.css";

class App extends React.Component {
  state = {
    Person: [
      { name: "Ohaya", age: 38 },
      { name: "Michael", age: 28 },
      { name: "Daniel", age: 30 }
    ],
    showDiv: false
  };

  handleChange = e => {
    this.setState({
      Person: [
        { name: e.target.value, age: 38 },
        { name: "Daniel", age: 28 },
        { name: "Ohaya", age: 30 }
      ]
    });
  };

  inputChangeHandler = () => {
    //console.log("button clicked");
    this.setState({
      Person: [
        { name: "Michael", age: 38 },
        { name: "Daniel", age: 28 },
        { name: "Ohaya", age: 30 }
      ]
    });
  };

  deleteHandler = index => {
    const newPerson = [...this.state.Person];
    //const newPerson = person.splice(index, 1);
    newPerson.splice(index, 1);
    this.setState({
      Person: newPerson
    });
  };

  // toggle div off and on
  toggleHandler = () => {
    // get the showDiv state and negate it
    const show = !this.state.showDiv;
    this.setState({
      showDiv: show
    });
  };
  render() {
    // display or not display 'div'
    let displayDivs = null;
    if (this.state.showDiv) {
      displayDivs = (
        <div style={{ padding: 10 }}>
          {this.state.Person.map((person, index) => {
            return (
              <UserOutput
                key={index}
                getname={person.name}
                getage={person.age}
                click={() => this.deleteHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    // manipulate userInput
    let userinput = (
      <UserInput
        style={{ margin: "10px 0px" }}
        changeName={this.handleChange}
        getName={
          this.state.Person.length === 0 ? null : this.state.Person[0].name
        }
      />
    );
    if (this.state.Person.length === 0) {
      userinput = <input />;
    }

    return (
      <div className="App">
        Here we are <br />
        {userinput}
        <UserButton click={this.toggleHandler} />
        {displayDivs}
      </div>
    );
  }
}

export default App;
