import styled from 'styled-components'

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 10rem;
  margin-top: ${(props) => props.marginTop};
  padding: 0.5rem;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 0.8rem;
  font-size: 1rem;

  .arrow-down {
    font-size: 1.4rem;
    margin-left: 0.5vw;
  }

  /* &:active{
    .fa-angle-down{
      transform: rotate(-90deg);
    }
  } */
`
