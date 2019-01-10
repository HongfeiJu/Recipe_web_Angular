import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChange = new Subject();
   private recipes: Recipe[] = [
    new Recipe('Red Braised Pork Belly', 'red cooked Chinese Pork dish',
      'http://m.360buyimg.com/pop/jfs/t23242/143/2005060588/30368/844015e9/5b7139f8N4382e202.jpg',
      [new Ingredient('pork', 200), new Ingredient('soy sauce', 10)]),
    new Recipe('Kung Pao chicken', 'a spicy, stir-fried Chinese chicken dish',
      'https://i.pinimg.com/474x/14/1f/65/141f65a728bd8847d83093ed9a1cd7ce--gong-bao-chicken-asian-foods.jpg',
      [new Ingredient('chicken breast', 200), new Ingredient('peanuts', 30)])
  ];

   constructor(private slService: ShoppingListService) {};

   getRecipes() {
     return this.recipes.slice();
   }

   getRecipe(index: number) {
     return this.recipes[index];
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe: Recipe) {
     this.recipes.push(recipe);
     this.recipeChange.next(this.recipes.slice());
   }

   updateRecipe(index: number, recipe: Recipe) {
     this.recipes[index] = recipe;
     this.recipeChange.next(this.recipes.slice());
   }

   deleteRecipe(index: number) {
     console.log('delete a recipe');
     this.recipes.splice(index, 1);
     this.recipeChange.next(this.recipes.slice());
   }

   loadRecipes(recipes: Recipe[]) {
     this.recipes = recipes;
     this.recipeChange.next(this.recipes.slice());
   }

}
