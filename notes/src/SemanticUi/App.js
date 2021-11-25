import React from "react";
import ReactDOM from 'react-dom';
import Items from "../SemanticUi/Items";
import Search from "../SemanticUi/Search";

  class App extends React.Component{
    constructor(props){
      super(props)
    }
    render(){ 
      return(
 <div className="ui vertical menu">
  <Items label="inbox" value="2" isActive={true}/> 
  <Items label="Sent Message" value="3" isActive={false}/> 
  <Items label="Recieve" value="5" isActive={false}/> 
    <Search placeholder="Search Content"/>
  </div>
  );
      }
    }
    


ReactDOM.render(<App/>,document.getElementById('root'));
export default App;