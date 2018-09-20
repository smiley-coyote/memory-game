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

  clickPuppy = puppy => {
    const puppyId = puppy.id
    const pup = this.state.puppy.filter(puppy => puppy.id === puppyId)   
    if (!pup[0].clicked) {
      const thisId = puppy.id
      const puppies = this.state.puppy.filter(puppy => puppy.id !== thisId)
      let thisPuppy = this.state.puppy.filter(puppy => puppy.id === thisId)
      thisPuppy = thisPuppy[0]
      thisPuppy.clicked = true
      puppies.push(thisPuppy);
      console.log(puppies);
      this.setState({ puppies })
    } else {
      console.log("you lose")
    }


  }
  //  const puppy = this.state.puppy.filter(puppy => puppy.id !== id);
  //  // Set this.state.friends equal to the new friends array
  //  this.setState({ puppy });
  // if (!this.state.clicked) {
  //   this.setState({
  //     character: update(this.state.id, { clicked: true })
  //   })
  // } else {
  //   console.log("lose");
  // }


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