import React from "react";

class RemoveAll extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
             <button onClick={this.props.removeAll} disabled={this.props.length >0? false:true}>RemoveAll</button>
            </div>
        ) 
    }
}
export default RemoveAll;