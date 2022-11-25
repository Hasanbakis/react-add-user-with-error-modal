import React, { useState } from "react";
import classes from "./UserInput.module.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredUserAge] = useState("");

  const [error,setError]  = useState({});

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length ===0 || enteredAge.trim().length ===0){
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age(non-empty value).',
        });
        setModal(true);  
        return
    }
    if(+enteredAge<1){
        setError({
            title:'Invalid age',
            message:'Please enter a valid age (>0).',
        });
        setModal(true);
        return
    }

    const userData = {
      id: Math.round(Math.random() * 100),
      userName: enteredUserName,
      age: enteredAge,
    };
    props.onSaveUserData(userData);
    setEnteredUserName("");
    setEnteredUserAge("");
  };



  return (
    <React.Fragment>
        <div className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={(event) => {
              setEnteredUserName(event.target.value);
            }}
          />
          <label>Age(Years)</label>
          <input
            type="text"
            value={enteredAge}
            onChange={(event) => {
              setEnteredUserAge(event.target.value);
            }}
          />
          <Button color="primary" type="submit">
            Add User
          </Button>
          </form>
        </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader  toggle={toggle}>{error.title}</ModalHeader>
        <ModalBody>{error.message}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
      </React.Fragment>
  );
};

export default UserInput;
