import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MealImage from '../../assets/meal.jpg'
import { StyledWelcome, Info, Image } from '../../styles/Welcome.styled'
import { Button } from '../../styles/Button.styled'
import { toggleCategories } from '../../redux/slices/toggleCategoriesSlice'
import { headerInfo } from '../../assets/headerInfo'

function HomeHeader() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.toggleCategories)

  // useEffect(() => {

  // }, [input])

  const changeDisplay = () => {
    dispatch(toggleCategories())
  }

  return (
    <StyledWelcome data-testId='welcome'>
      <Info>
        <h1>{headerInfo.head}</h1>
        <p>{headerInfo.text}</p>
        <Button marginTop='10vh' onClick={() => changeDisplay()}>
          Categories &ensp;
          <i className={`fa fa-angle-${isOpen ? 'down' : 'right'} arrow-down`} />
        </Button>
      </Info>
      <Image src={MealImage} alt='Meal' />
    </StyledWelcome>
  )
}

export default HomeHeader
