import React from 'react'
import { StyledMeals, MealLink, Item } from '../../styles/Meals.styled'

function Meals({ meals }) {
  const listOfMealsJSX = meals
    ? meals.meals.slice(1, 10).map((meal) => (
      <MealLink
        to={`/single-meal/id=${meal.idMeal}`}
        key={meal.strMeal}
      >
        <Item>
          <img src={meal.strMealThumb} alt='Meal' />
          <h3>{meal.strMeal}</h3>
        </Item>
      </MealLink>
    ))
    : null

  return <StyledMeals>{listOfMealsJSX}</StyledMeals>
}

export default Meals
