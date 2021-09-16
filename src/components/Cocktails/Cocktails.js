import React from "react";
import { useState, useEffect } from "react";
import Card from "./../Card/Card";
import styles from "./Cocktails.module.css";

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function Cocktails() {
  const [letter, setLetter] = useState("a");
  const [drinks, setDrinks] = useState([]);

  const handleButtonClick = (letter) => {
    setLetter(letter);
  };
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    ).then((response) => response.json().then((json) => setDrinks(json)));
  }, [letter]);

  let drinksList = null;
  if (drinks.drinks !== undefined) {
    if (drinks.drinks === null) {
      drinksList = "No drinks found";
    } else {
      drinksList = drinks.drinks.map((drink) => (
        <Card key={drink.idDrink} drink={drink} />
      ));
    }
  } else {
    drinksList = "";
  }
  return (
    <div className={styles.mainContainer}>
      <h1>Cocktails</h1>
      <div className={styles.alphabetContainer}>
        {alphabet.split("").map((letter) => {
          return (
            <button
              key={letter}
              className={styles.buttonAtoZ}
              onClick={() => handleButtonClick(letter)}
            >
              {letter.toUpperCase()}
            </button>
          );
        })}
      </div>
      <h1>{letter.toUpperCase()}</h1>
      <div className={styles.cardContainer}>{drinksList}</div>
    </div>
  );
}

export default Cocktails;
