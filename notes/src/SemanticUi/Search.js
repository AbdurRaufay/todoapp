import React from "react";
class Search extends React.Component{
   constructor(props){
     super(props)
     
   }
    render(){
    return(
      <div className="item">
    <div className="ui transparent icon input">
      <input type="text" placeholder={this.props.placeholder}/>
      <i className="search icon"></i>
    </div>
  </div>

    
    )
    }
}
export default Search;