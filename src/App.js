import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppy from "./puppies.json"
import PuppyCard from "./components/PuppyCard"
import Banner from "./components/Banner"

class App extends Component {
  state = {
    puppy, count: 0, highScore: 0
  };

  // after object is clicked sends its id
  clickPuppy = id => {
    // sets new variable pup to object that equals id of object that was clicked
    let pup = this.state.puppy.filter(puppy => puppy.id === id) 
    // if that object hasn't been clicked... 
    if (!pup[0].clicked) {
      // filters through state array and sets puppy equal to objects not equal to id of clicked object
      // to seperate current object from the rest
      const puppy = this.state.puppy.filter(puppy => puppy.id !== id)
      // remove pup object from its array
      pup = pup[0]
      // set object clicked to true
      pup.clicked = true
      // push clicked object back into main array
      puppy.push(pup);
      
      // scramble array
      for (let i = puppy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [puppy[i], puppy[j]] = [puppy[j], puppy[i]];
      }
      // add to score
      this.setState({ puppy, count: this.state.count + 1 })
    } 
    // if puppy was already clicked
    else {
      // sets high score if score is greater
      if (this.state.count > this.state.highScore){
        this.setState({highScore: this.state.count})
        this.setState({count: 0})
        const puppy = this.state.puppy.map(puppy => puppy)
        // resets array back to original state
        for(let i=0; i<puppy.length; i++){
          puppy[i].clicked = false;
        }
        // sets array
        this.setState({puppy})
        
      } else {
        // if no high score
        this.setState({count: 0})
        const puppy = this.state.puppy.map(puppy => puppy)
        for(let i=0; i<puppy.length; i++){
          puppy[i].clicked = false;
        }
        this.setState({puppy})
      }
      
    }


  }





  render() {
    return (
     
      <Wrapper>
         
        <Title>Vet School Score: {this.state.count} High Score: {this.state.highScore}</Title>
        <Banner />
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