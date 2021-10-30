import React from "react"
import { Link } from "react-router-dom"
import { StyledRecomendation } from "../styles/OurRecomendation.styled"

function OurRecomendation({ recomendedMeal }) {
  const recomendedMealJSX = recomendedMeal ? (
    <>
      <h2>Our recomendation</h2>
      <h1>{recomendedMeal.meals[0].strMeal}</h1>
      <Link
        to={`/single-meal/id=${recomendedMeal.meals[0].idMeal}`}
        key={recomendedMeal.meals[0].strMeal}
      >
        <img src={recomendedMeal.meals[0].strMealThumb} alt="Meal" />
      </Link>
    </>
  ) : null

  return <StyledRecomendation>{recomendedMealJSX}</StyledRecomendation>
}

export default OurRecomendation
