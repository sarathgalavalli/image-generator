import React from "react";
import AddOption from "./AddOption";

export default class App extends React.Component {
  handleAddOption = (canvasId, width, height, delay) => {
    window.draw(canvasId, width, height, delay);
  };

  render() {
    return (
      <div>
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
