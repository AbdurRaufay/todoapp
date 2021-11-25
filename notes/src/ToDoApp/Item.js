import React from "react";
class Item extends React.Component{
    constructor(props){
        super(props)
        this.state={disable:false}
    }
    remove=(e)=>{
        
         this.props.removeOneItem(this.props.task)
   }
    render(){
        return(
            <div>
                <li>{this.props.task}
                <button onClick={this.remove}>x</button>
                </li>
            </div>
        )
    }
}
export default Item;