import React from "react";

const UserItem = (props) =>{

    return(
        <li>
            <p>{props.userName} ({props.age} years old)</p>
        </li>
    )



}

export default UserItem;