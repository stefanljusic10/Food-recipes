import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContact, Input, Textarea } from '../styles/Contact.styled'
import { Button } from '../styles/Button.styled'

toast.configure();

function Contact() {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    let contactsArray = JSON.parse(localStorage.getItem("contacts")) || [];
    contactsArray.push(info);
    localStorage.setItem("contacts", JSON.stringify(contactsArray));
    toast.success("Message was successfully sent!");
  };

  return (
    <StyledContact id="contact">
      <form onSubmit={(e) => onFormSubmit(e)} className="contact__form">
        <h2>Contact</h2>
        {/* <br /><br /><br /> */}
        <Input
          id="firstName"
          type="text"
          placeholder="First name"
          onChange={(e) => setInfo({ ...info, [e.target.id]: e.target.value })}
        />
        <br /> <br />
        <Input
          id="lastName"
          type="text"
          placeholder="Last name"
          onChange={(e) => setInfo({ ...info, [e.target.id]: e.target.value })}
        />
        <br /><br />
        <Input
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setInfo({ ...info, [e.target.id]: e.target.value })}
        />
        <br /><br />
        <br />
        <Textarea
          id="message"
          rows="9"
          placeholder="Message"
          onChange={(e) => setInfo({ ...info, [e.target.id]: e.target.value })}
        ></Textarea>
        <br /><br />
        <Button marginTop='0'>Save</Button>
      </form>
    </StyledContact>
  );
}

export default Contact;
