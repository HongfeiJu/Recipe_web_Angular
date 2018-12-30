import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
   private ingredients: Ingredient[] = [
     new Ingredient('tomato', 10)
   ];

   ingredientChanged = new Subject<Ingredient[]>();
   startedEditing = new Subject<number>();

   getIngredients() {
     return this.ingredients.slice();
   }

   getIngredient(index: number) {
     return this.ingredients[index];
   }

   addIngredient(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientChanged.next(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
     this.ingredients.push(...ingredients);
     this.ingredientChanged.next(this.ingredients.slice());
   }

  updateIngredient(index: number, ingredient: Ingredient) {
     this.ingredients[index] = ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
     this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
