import React from "react";
import styles from "./Card.module.css";
import { v4 as uuidv4 } from "uuid";

function Card({ drink }) {
  let ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if (drink[`strIngredient${i}`] !== null) {
      let newIngredient = {
        ingredient: drink[`strIngredient${i}`],
        measure: drink[`strMeasure${i}`],
      };
      ingredients.push(newIngredient);
    }
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>{drink.strDrink}</div>
      <img
        className={styles.cardPicture}
        src={drink.strDrinkThumb}
        alt="cocktail"
      />
      <p>
        <b>Ingredients</b>
      </p>
      <div className={styles.ingredientsContainer}>
        {ingredients.map((item) => {
          return (
            <div key={uuidv4()} className={styles.ingredient}>
              <div>{item.ingredient}</div>
              <div>{item.measure}</div>
            </div>
          );
        })}
      </div>
      <p>
        <b>Recipe</b>
      </p>
      <div className={styles.recipe}>{drink.strInstructions}</div>
    </div>
  );
}

export default Card;
