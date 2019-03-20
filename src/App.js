import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import shuffle from "shuffle-array";
shuffle(friends);

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    highScore: 0,
    currentScore: 0
  };

  clickHandle = id => {
    let friendArr = [...this.state.friends];
    // let clikcedArr = []

    console.log("clicked");
    for (let i = 0; i < friendArr.length; i++) {
      if (id === friendArr[i].id) {
        if (!friendArr[i].clicked) {
          this.setState({
            currentScore: this.state.currentScore + 1
          });
          friendArr[i].clicked = true;
          shuffle(friends);
        } else if (friendArr[i].clicked) {
          if (this.state.currentScore > this.state.highScore) {
            this.setState({
              highScore: this.state.currentScore,
              currentScore: 0
            });
          } else {
            this.setState({
              currentScore: 0
            });
          }
          friendArr[i].clicked = false;
          alert("Oh No! Game over!");
        }
      }
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Click all the Things!!</Title>
        <h2 className="col-12 text-center">
          Current Score: {this.state.currentScore}
        </h2>
        <h2 className="col-12 text-center">
          High Score: {this.state.highScore}
        </h2>
        {this.state.friends.map(friend => (
          <FriendCard
            clickHandle={this.clickHandle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
