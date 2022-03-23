import { Component, OnInit } from '@angular/core';
import {drinks} from "../../receipt";
import {Drink} from "../../models/Drink";

@Component({
  selector: 'app-receipts-ingredients',
  templateUrl: './receipts-ingredients.component.html',
  styleUrls: ['./receipts-ingredients.component.scss']
})
export class ReceiptsIngredientsComponent implements OnInit {
  ingredientsSelectedArray: any = []
  drinksArray: any = []
  drinksArrayDisplay: any = []
  constructor() { }
  ingredientsArray: any = []

  ngOnInit(): void {
    for (const drink of drinks) {
      let arrayMesureIngredient = []
      console.log('kokodjodjo', drink)
      for (let i = 1; i < 15; i++) {
        // @ts-ignore
        if ( drink["strIngredient"+i.toString()] ){
          // @ts-ignore
          let ingredient = drink["strIngredient"+i.toString()]
          if (!this.ingredientsArray.includes(ingredient)){
            this.ingredientsArray.push(ingredient)
          }
          // @ts-ignore
          let mesure = drink["strMeasure"+i.toString()]
          let mesureingredient = {
            ingredient: ingredient,
            mesure: mesure
          }
          arrayMesureIngredient.push(mesureingredient)
        }
      }
      let drinkInstance = new Drink(drink.strDrink, drink.strDrinkThumb, arrayMesureIngredient)
      this.drinksArray.push(drinkInstance)
    }
  }

  selectIngredient(ingredient: string) {
    const textDiv = document.getElementById('id'+ingredient);
    this.drinksArrayDisplay = []
    if (!this.ingredientsSelectedArray.includes(ingredient)){
      // @ts-ignore
      textDiv.classList.add('textSelected');
      this.ingredientsSelectedArray.push(ingredient)
    }
    else {
      // @ts-ignore
      textDiv.classList.remove('textSelected');
      let indexDelete = this.ingredientsSelectedArray.indexOf(ingredient)
      this.ingredientsSelectedArray.splice(indexDelete, 1)
    }
    for (const drink of this.drinksArray) {
      let drinkOk = true
      {
        for (const ingredientsSelected of this.ingredientsSelectedArray) {
          if (!drink.ingredientsMesureList.some((e: { ingredient: string; }) => e.ingredient === ingredientsSelected)){
            drinkOk = false
          }
        }
      if (drinkOk && !this.drinksArrayDisplay.includes(drink) && this.ingredientsSelectedArray.length>0){
        this.drinksArrayDisplay.push(drink)
      }
    }
  }}
}
