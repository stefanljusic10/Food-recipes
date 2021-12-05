import styled from 'styled-components'

export const StyledContact = styled.div`
  margin: 20vh auto;

  form {
    width: 40%;
    margin: 0 auto;

    h2 {
      display: inline-block;
      margin-bottom: 5vh;
      font-size: 2rem;
      color: darkslategray;
      border-bottom: 0.2rem solid darkslategray;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 4vh;
  border: solid grey 1px;
  border-radius: 0.5rem;
  padding: 0.2rem 0.4rem;
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 18.5vh;
  margin-top: -2vh;
  border: solid grey 1px;
  border-radius: 0.5rem;
  padding: 0.2rem 0.4rem;

  &:focus {
    outline: none;
  }
`
