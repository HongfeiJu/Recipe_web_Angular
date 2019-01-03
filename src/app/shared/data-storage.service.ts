import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService: RecipeService,
              private httpClint: HttpClient,
              private authService: AuthService) { }

  saveData() {
    const token = this.authService.getToken();
    return this.httpClint.put('https://hongfei-recipe.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  fetchData() {
    const token = this.authService.getToken();
    return this.httpClint.get('https://hongfei-recipe.firebaseio.com/recipes.json?auth=' + token);
  }
}
