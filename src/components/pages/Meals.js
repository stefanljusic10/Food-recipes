import React from "react";
import { useDispatch } from "react-redux";
import { selectedCategoryAction } from "../../redux/actions";
import { StyledMeals, MealLink, Item } from '../styles/Meals.styled'

function Meals({ meals }) {
  const dispatch = useDispatch();

  const listOfMealsJSX = meals
    ? meals.meals.slice(1, 10).map((meal) => {
        return (
          <MealLink
            // onClick={() => dispatch(selectedCategoryAction(meal.strCategory))}
            to={`/single-meal/id=${meal.idMeal}`}
            key={meal.strMeal}
          >
            <Item>
              <img src={meal.strMealThumb} alt="Meal" />
              <h3>{meal.strMeal}</h3>
            </Item>
          </MealLink>
        );
      })
    : null;

  return (
    <StyledMeals>
      {listOfMealsJSX}
    </StyledMeals>
  );
}

export default Meals;
