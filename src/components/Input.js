import React, {Component} from "react";


class Input extends Component {
  constructor() {
    super();
    this.state = {value:''};
  }
  textNum(e) {
    this.setState({inputvalue: e.target.value.replace(/\D/g, '')});
  }
  render() {
    return (
      <div className="group">
        <center>
          <input 
          type="text" 
          value={(this.state.inputvalue)}
          onChange={this.textNum.bind(this)}
          placeholder="Search..." />

        </center>
      </div>
    )
  }
}



export default Input