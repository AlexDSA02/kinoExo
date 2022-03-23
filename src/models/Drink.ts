export class Drink {
  nameDrink: string
  image: string
  ingredientsMesureList: string[]

  constructor(name: string, img: string, arrayIngredientMesure: any []) {
    this.nameDrink = name;
    this.image = img;
    this.ingredientsMesureList = arrayIngredientMesure;
  }
}
