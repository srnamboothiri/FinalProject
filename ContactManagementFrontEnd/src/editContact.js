import React from "react";
import { useContactContext } from "./ContactProvider";
import { useInput } from "./hooks";
import { useHistory } from "react-router-dom";

const UpdateContact = (props) => {
  const { updateContact} = useContactContext();

  const history = useHistory();
  const [name, updateName] = useInput(props.match.params.name);
  const [email, updateEmail] = useInput(props.match.params.email);
  const [phone, updatePhone] = useInput(props.match.params.phone);

  const id = props.match.params.id;

  const submit = (event) => {
    event.preventDefault();
    updateContact(id, name, email, phone);
    history.push('/');
  };

  return (
    <>
      <h1>Update form</h1>
      <form onSubmit={submit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <br></br>
        <input
          id="name"   
          value={name}      
          onChange={updateName}
          type="text"          
          required
        />
        <br></br>
        <label htmlFor="email">Email:</label>
        <br></br>
        <input
          id="email"
          value={email}
          onChange={updateEmail}
          type="text"
          required
        />
        <br></br>
        <label htmlFor="phone">Phone:</label>
        <br></br>
        <input id="phone"
          value={phone}
          onChange={updatePhone}
          type="text"
          required />
        <button className="update-button">Update</button>
      </form>
    </>
  );
};

export default UpdateContact;