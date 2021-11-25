import React  from "react";


const Comments=({avator,author,date,comment})=>{
 return (
          <div className="ui container">
    <a className="avatar">
      <img src={avator} alt="avator" href="asjfalj"/>
    </a>
    <div className="content">
      <a className="author">{author}</a>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">
       {comment}
      </div>
    </div>
     </div>
 );
}
export default Comments;