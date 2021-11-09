import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { StyledContact, Input, Textarea } from '../styles/Contact.styled'
import { Button } from '../styles/Button.styled'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function Contact() {
  const { register, handleSubmit } = useForm()

  const onFormSubmit = (data) => {
    const contactsArray = JSON.parse(localStorage.getItem('contacts')) || []
    contactsArray.push(data)
    localStorage.setItem('contacts', JSON.stringify(contactsArray))
    toast.success('Message was successfully sent!')
  }

  return (
    <StyledContact id="contact">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <h2>Contact</h2>
        <Input
          id="firstName"
          type="text"
          placeholder="First name"
          {...register('firstName', { required: true, maxLength: 15 })}
        />
        <br />
        <br />
        <Input
          id="lastName"
          type="text"
          placeholder="Last name"
          {...register('lastName', { required: true, maxLength: 15 })}
        />
        <br />
        <br />
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...register('email',
          { 
            required: true,  
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        })}
        />
        <br />
        <br />
        <br />
        <Textarea
          id="message"
          rows="9"
          placeholder="Message"
          {...register('message', { required: true })}
        />
        <br />
        <br />
        <Button marginTop="0">Save</Button>
      </form>
    </StyledContact>
  )
}

export default Contact
