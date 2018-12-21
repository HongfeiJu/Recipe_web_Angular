import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
   private recipes: Recipe[] = [
    new Recipe('Hongshao Pork', 'most popular pork cooking',
      'https://ali.xinshipu.cn/20110825/original/1314251955118.jpg@288w_216h_99q_1e_1c.jpg',
      [new Ingredient('pork', 200), new Ingredient('soy sauce', 10)]),
    new Recipe('Kongbao Chicken', 'most popular chicken cooking',
      'https://i.pinimg.com/474x/14/1f/65/141f65a728bd8847d83093ed9a1cd7ce--gong-bao-chicken-asian-foods.jpg',
      [new Ingredient('chicken breast', 200), new Ingredient('peanuts', 30)])
  ];

   recipeSlected = new EventEmitter<Recipe>();

   constructor(private slService: ShoppingListService) {};

   getRecipes() {
     return this.recipes.slice();
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
   }

}
