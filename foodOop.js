"use strict";

class Food {

    constructor (name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    toString () {
        return `${this.name} | ${this.protein}g protein :: ${this.carbs}g Corbonhydrate :: ${this.fat}g Fat`
    }

}

class FoodSet extends Array {

    constructor(...foods) {
        super();
        this.foods = [];
        foods.forEach((food) => this.foods.push(food))
    }

     * [Symbol.iterator] () {
        let position = 0;
        while (position < this.foods.length) {
          if (position === this.foods.length) {
              return "Done!"
          } else {
              yield `${this.foods[ position++ ]}  `;
          }
         }
          console.log("for BreakFast");
         //yield `${this.foods} for BreakFast`;
     }

      static get [Symbol.species] () {
          return Array;
      }
}

const foodset = new FoodSet(new Food('Efo riro', 26, 0, 10), new Food('Amala', 27, 12, 12));

for (let food of foodset) {
  console.log( food );
}
