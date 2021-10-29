import styled from 'styled-components';

export const StyledFooter = styled.div`
    width: 100%;
    height: 20vh;

    footer{
        padding: 0 15vw;
        border-top: 0.1rem darkslategray solid;
    }
`

export const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5vh;
`

export const Logo = styled.img`
    width: 8rem;
    height: auto;
`

export const Social = styled.ul`
    list-style: none;

    li{
        display: inline;
        margin-right: 3vw;
    }

    li:last-child {
        margin-right: 0;
    }

    i {
        font-size: 4rem;
        color: darkslategray;
    }
`

export const Copy = styled.p`
    text-align: center;
  font-size: 0.8rem;
`