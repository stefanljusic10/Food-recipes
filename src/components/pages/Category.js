import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OurRecomendation from "./OurRecomendation";
import Meals from "./Meals";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategoryAction } from "../../redux/actions";

function Category() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.selectedCategory);

  useEffect(() => {
    dispatch(selectedCategoryAction(categoryName));
  }, []);

  return (
    <div>
      <OurRecomendation recomendedMeal={meals} />
      <Meals meals={meals} />
    </div>
  );
}

export default Category;
