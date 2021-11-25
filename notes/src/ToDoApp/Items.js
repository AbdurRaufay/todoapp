import React from 'react';
import Item from './Item';
class Items extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <ol>
                 {this.props.tasks.map((task,key)=>{
                    return <Item task={task} key={key} removeOneItem={this.props.removeOneItem}/>
                 })}
                </ol>
            </div>
        )
    }
}
export default Items;