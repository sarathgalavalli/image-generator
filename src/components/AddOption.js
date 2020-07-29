import React from "react";

export default class AddOption extends React.Component {
  handleAddOption = (e) => {
    e.preventDefault();
    const Width = e.target.elements.Width.value.trim();
    const Height = e.target.elements.Height.value.trim();
    const delay = e.target.elements.delay.value.trim();

    this.props.handleAddOption("imageGeneratorCanvas", Width, Height, delay);
  };
  render() {
    return (
      <div className="mx-auto" style={{ width: "800px" }}>
        <form onSubmit={this.handleAddOption}>
          <div className="form-group">
            <label>Enter Width</label>
            <input type="text" className="form-control" name="Width" />
          </div>
          <div className="form-group">
            <label>Enter Height</label>
            <input type="text" className="form-control" name="Height" />
          </div>
          <div className="form-group">
            <label>Enter delay</label>
            <input type="text" className="form-control" name="delay" />
          </div>

          <button className="btn btn-primary">Generate Image</button>
        </form>
      </div>
    );
  }
}
