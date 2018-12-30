import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChange = new Subject();
   private recipes: Recipe[] = [
    new Recipe('Hongshao Pork', 'most popular pork cooking',
      'https://ali.xinshipu.cn/20110825/original/1314251955118.jpg@288w_216h_99q_1e_1c.jpg',
      [new Ingredient('pork', 200), new Ingredient('soy sauce', 10)]),
    new Recipe('Kongbao Chicken', 'most popular chicken cooking',
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

}
