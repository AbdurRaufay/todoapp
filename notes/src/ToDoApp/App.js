import React from "react";
import AddItem from "./AddItem"; 
import Pick from "./Pick";
import Items from "./Items"; 
import RemoveAll from "./RemoveAll";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:['Ist','Second','Third','Four','Five'],
            error:null,
            disabled:false,
            error:null
        }
        this.PickTask=this.PickTask.bind(this);
        this.removeAll=this.removeAll.bind(this);
        this.addOneItems=this.addOneItems.bind(this);
        this.removeOneItem=this.removeOneItem.bind(this);
    }

PickTask(){
   const r=Math.random()*this.state.tasks.length;
   alert(this.state.tasks[r]);
}
   removeAll(){
       this.setState({tasks:[]})
   }
  removeOneItem(oneOption){
      this.setState((prevState)=>{
           return {
               tasks:prevState.tasks.filter(task=>task!=oneOption)
           }
      })
  }
   addOneItems(taskText){
       if(taskText==""){
           return 'Empty string is not allowed';
       }
       else if(taskText.length<3){
           return 'Text length is must be greater or equal to 3 character'
       }else if(this.state.tasks.indexOf(taskText)>-1){
           return 'Duplication is not allowed'
       }
       else{
       this.setState((prevState)=>{
           return {
               tasks:prevState.tasks.concat(taskText)
            
           }
       }) 
    }
   }

    render(){
        return(
            <div>
                <h1>To Do App</h1>
                <AddItem add={this.addOneItems} />
                <Pick PickTask={this.PickTask}/>
                <Items tasks={this.state.tasks} removeOneItem={this.removeOneItem}/>
                <RemoveAll removeAll={this.removeAll}  length={this.state.tasks.length}/>
            </div>
        )
        } 
}
export default App;
