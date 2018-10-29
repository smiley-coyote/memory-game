# The Sick Puppies Memory Game

Welcome to the Sick Puppy Memory Game! For this project, I use React to manage 
a component state, respond to user events, and display all of the data on the page.

Link:
* https://smiley-coyote.github.io/memory-game/

### How does it work?

Each puppy is stored as an object within an array, and that data is saved into a
React component state. When a user clicks on a puppy object, its value of "clicked"
is set to true, and the entire array is scrambled and set back to the component 
state and re-rendered onto the page. If an object with the value of
"clicked: true" is clicked, then the game is over and the high score will be set
to current user score if it is lower.