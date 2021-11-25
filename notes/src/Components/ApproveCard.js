import React from "react";

const ApproveCard=(props)=>{
    return(
        <div className="extra content">
          {props.children}
       <div className="ui two buttons">
       <div className="ui basic green button">Approve</div>
      <div className="ui basic red button">Decline</div>
    </div>
    </div>
    )
}
export default ApproveCard;
