import React , { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';


const App = ()  =>{
    const [users,setUsers] = useState([])
     
    const addUserHandler = (user)=>{
      setUsers((prevUsers)=>{
        return[user,...prevUsers];

      });
    }

  return (
    <div>
      <section>
        <UserInput onSaveUserData={addUserHandler}/>
      </section>
      <section>
        <UserList items={users} />
      </section>
    </div>
  );
}

export default App;
