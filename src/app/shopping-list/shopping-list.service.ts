import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
   private ingredients: Ingredient[] = [];

   ingredientChanged = new EventEmitter<Ingredient[]>();

   getIngredients() {
     return this.ingredients.slice();
   }

   addIngredient(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientChanged.emit(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
     this.ingredients.push(...ingredients);
     this.ingredientChanged.emit(this.ingredients.slice());
   }
}
