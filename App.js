import React from "react";
import styled from "styled-components";

const Strikethrough = styled.div`
  ${(props) =>
    props.strike ? "text-decoration: line-through" : "text-decoration: none"}
`;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
      list: []
    };
  }

  updateValue = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  onButtonClick = () => {
    this.setState({
      list: [
        ...this.state.list,
        { userInput: this.state.inputValue, isClicked: false }
      ],
      inputValue: ""
    });
  };

  strike = (index) => {
    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        {
          ...this.state.list[index],
          isClicked: !this.state.list[index].isClicked
        },
        ...this.state.list.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div>
        Hello there!
        <input onChange={this.updateValue} value={this.state.inputValue} />
        {this.state.inputValue}
        <button onClick={this.onButtonClick}>Click me!</button>
        {this.state.list.map((value, index) => (
          <Strikethrough
            strike={value.isClicked}
            onClick={() => this.strike(index)}
          >
            {value.userInput}
          </Strikethrough>
        ))}
      </div>
    );
  }
}

export default App;
