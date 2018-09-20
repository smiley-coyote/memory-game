import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppy from "./puppies.json"
import PuppyCard from "./components/PuppyCard"

class App extends Component {
  state = {
    puppy
  };

  clickPuppy = id => {
    const pup = this.state.puppy.filter(puppy => puppy.id === id)   
    if (!pup[0].clicked) {
      const puppy = this.state.puppy.filter(puppy => puppy.id !== id)
      let thisPuppy = this.state.puppy.filter(puppy => puppy.id === id)
      thisPuppy = thisPuppy[0]
      thisPuppy.clicked = true
      puppy.push(thisPuppy);
      
      // randomizer
      for (let i = puppy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [puppy[i], puppy[j]] = [puppy[j], puppy[i]];
      }
      console.log(puppy);

      this.setState({ puppy })
    } else {
      console.log("you lose")
    }


  }





  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        {this.state.puppy.map(puppy => (
          <PuppyCard
            clickPuppy={this.clickPuppy}
            clicked={puppy.clicked}
            id={puppy.id}
            key={puppy.id}
            name={puppy.name}
            image={puppy.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;