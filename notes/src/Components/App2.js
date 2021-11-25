import React from 'react';
import Controls from './Controls';

class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.changeState=this.changeState.bind(this);
        this.changeMinusState=this.changeMinusState.bind(this);
        this.changeResetState=this.changeResetState.bind(this);
    }

       changeState(){
           this.setState(prevState=>{
               return{count: prevState.count+1}
           })

    }
    changeMinusState(){
        this.setState(prevState=>{
            return{ count: prevState.count-1}
        })
    }
    changeResetState(){
        this.setState({count: 0})
    }


        render(){
            return(
                <div>
                    <h1>Counter:{this.state.count}</h1>
                    <Controls changeState={this.changeState}
                     changeMinusState={this.changeMinusState}
                     changeResetState={this.changeResetState}
                    />
                </div>
            )
        }
    }


export default App2;