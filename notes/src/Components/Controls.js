import React from "react";

class Controls extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button onClick={this.props.changeState}>plus</button>
                <button onClick={this.props.changeMinusState}>minus</button>
                <button onClick={this.props.changeResetState}>Reset</button>
            </div>
        )
    } 
}
export default Controls;