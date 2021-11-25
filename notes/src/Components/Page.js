import React  from "react";

function Page(props){
    return (
        <div>
            <p>{props.tittle}</p>
            <p>{props.text}</p>
        </div>
    )
}
export default Page;