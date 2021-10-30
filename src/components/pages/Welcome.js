import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCategoriesAction } from "../../redux/actions"
import MealImage from "../../assets/meal.jpg"
import { StyledWelcome, Info, Image } from "../styles/Welcome.styled"
import { Button } from "../styles/Button.styled"

function HomeHeader() {
  const headerInfo = useSelector((state) => state.headerInfo)
  const dispatch = useDispatch()

  const changeDisplay = () => {
    dispatch(toggleCategoriesAction())
  }

  const imageJSX = <Image src={MealImage} alt="Meal" />

  return (
    <StyledWelcome>
      <Info>
        <h1>{headerInfo.head}</h1>
        <p>{headerInfo.text}</p>
        <Button marginTop="10vh" onClick={() => changeDisplay()}>
          Categories
          <i className="fa fa-angle-down arrow-down" />
        </Button>
      </Info>
      {imageJSX}
    </StyledWelcome>
  )
}

export default HomeHeader
