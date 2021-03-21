import React from "react";
import styled from "styled-components";

const Strikethrough = styled.div`
  ${(props) =>
    props.strike ? "text-decoration: line-through" : "text-decoration: none"}
`;

class AppPractice extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
      list: []
    };
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onButtonClick = (event) => {
    this.setState({
      list: [
        ...this.state.list,
        { inputValue: this.state.inputValue, isClicked: false }
      ],
      inputValue: ""
    });
  };

  onStrike = (index) => {
    //this.setState({isClicked: !this.state.isClicked})
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
        Hello!
        <input value={this.state.inputValue} onChange={this.onInputChange} />
        <button onClick={this.onButtonClick}>Click me!</button>
        {this.state.list.map((value, index) => (
          <Strikethrough
            onClick={() => this.onStrike(index)}
            strike={value.isClicked}
          >
            {value.inputValue}
          </Strikethrough>
        ))}
      </div>
    );
  }
}

export default AppPractice;
