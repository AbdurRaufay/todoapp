import React from "react";

class AddItem extends React.Component{
   constructor(props){
       super(props)
       this.state={
        error:null,
      
       }
     this.inpRef=React.createRef()   
   }
   componentDidMount(){
    this.inpRef.current.focus()
   }
   
   addItems=(e)=>{
    e.preventDefault();
     const addOption=e.target.elements.addName.value;
    const errorPass= this.props.add(addOption)
    this.setState(()=>{
        return{
            error:errorPass
        }
    })
}
   
    render(){
        return(
            <div>
                  <p className='err'>{this.state.error}</p>
                <form onSubmit={this.addItems}>
                    <input type="text" name='addName' ref={this.inpRef}/>
                    <button >AddItem</button>
                </form>
              
            </div>
        )
    }
  
   
}
export default AddItem;