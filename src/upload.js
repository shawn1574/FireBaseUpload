import React, { Component } from "react";
import storage from "./firebase";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null, url: "", progress: 0 };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
  };

  render() {
    return (
      <>
        <input type="file" onChange={this.handleChange}></input>
        <button>upload</button>
      </>
    );
  }
}

export default Upload;
