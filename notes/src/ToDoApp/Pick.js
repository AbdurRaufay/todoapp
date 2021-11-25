import React from "react";

class Pick extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <button onClick={this.props.PickTask}>PickTask</button>
            </div>
        )
    }
    
    
}
export default Pick;