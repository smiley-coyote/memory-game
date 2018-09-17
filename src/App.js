import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import character from "./characters.json"
import CharacterCard from "./components/CharacterCard"

class App extends Component {
  state = {
    character
  };

  // clickCharacter = id => {
  //   if (!this.state.clicked) {
  //     this.setState({
  //       character: update(this.state.id, { clicked: true })
  //     })
  //   } else {
  //     console.log("lose");
  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        {this.state.character.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;