// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends Component {

// Establish a function that we are going to be passing
// into the Todo Component.
  alertMe(){
    alert("You're a wizard");
  }

  render() {
    return (
      <div>

      </div>
    );

}

// Fix all the errors that are plaguing this application thus far.
// After you're done with that, please follow the instructions below.

// 1. Create some default Props and pass them along to your
// child component.

// 2. Display that content in either an h tag or a p tag.

// 2. Pass the funMe function to your child component and when
// someone clicks on a button, it will show the alert on from this component.





export default App;
