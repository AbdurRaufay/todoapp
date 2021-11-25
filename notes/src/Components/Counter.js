import React from "react";

class Counter extends React.Component{
    constructor(props){
    super(props)
  
        this.state={ Count:20 ,
            display:true
        
        }
        this.reset=this.reset.bind(this);
        this.plus=this.plus.bind(this);
        this.minus=this.minus.bind(this);
        this.showHide=this.showHide.bind(this);
    }
        reset(){
            this.setState({Count:0})
        }
        plus(){
            this.setState((prevState)=>{
              return {
                  Count: prevState.Count+1
              }
            })
        }
        minus(){
            this.setState((prevState)=>{
              return {
                  Count: prevState.Count-1
              }
            })
        }
        showHide(){
            this.setState((prevState)=>{
            return {display: !prevState.display}
            })
        }
  
        render(){
            return(
                <div>
                    <h1>Counter is :{this.state.Count}</h1>
                    <button onClick={this.plus}>Plus</button>
                    <button onClick={this.minus}>Minus</button>
                    <button onClick={this.reset}>Reset</button>
                     {this.state.display && <p>This is para</p>}
                     <button onClick={this.showHide}>{this.state.display  ? 'hide' : "show"}</button>
                     
                     
                </div>
            )  
       
    }
}
export default Counter;