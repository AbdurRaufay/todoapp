import React from "react";
class Items extends React.Component {
  constructor(props){
    super(props);
  }
render(){
    return(
  <div>
  <a className={this.props.isActive ? "active teal item": "teal item"}>
    {this.props.label}
    <div className="ui teal left pointing label">{this.props.value}</div>
  </a>
  </div>
    )
  }
  }

export default Items;