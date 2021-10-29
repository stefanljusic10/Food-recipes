import styled from 'styled-components'

export const StyledSingleMeal = styled.div`
    display: flex;
    width: 70vw;
    margin: 10vh auto;
    font-family: sans-serif;
    color: darkslategray;

    .singleMeal__info{
        display: flex;
        flex-direction: column;
        width: 30%;

        .singleMeal__info-image{
            width: 20vw;
            height: auto;
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    img {
        width: 20vw;
        height: auto;
    }
`

export const Recipe = styled.div`
    display: flex;
    margin-top: 2vh;

    p { line-height: 1.4rem; }

    div:last-child{
        margin-left: 2vw;
    }
`

export const Description = styled.div`
    margin-top: 6vh;
    margin-left: 5vw;
`