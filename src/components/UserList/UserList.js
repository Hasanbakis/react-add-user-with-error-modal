import React from "react";
import UserItem from "../UserItem/UserItem";
import classes from "./UserList.module.css"
const UserList = (props) =>{

    if(props.items.length===0){
        return null;
    }

    return(
        <div className={classes.users}>
        <ul >
            {props.items.map((user)=>(
                <UserItem key={user.id}
                userName={user.userName}
                age={user.age}
            />
            ))} 
            
           
        </ul>
        </div>
    )






}

export default UserList;