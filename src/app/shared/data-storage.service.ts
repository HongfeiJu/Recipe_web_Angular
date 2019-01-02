import { Injectable } from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService: RecipeService,
              private httpClint: HttpClient) { }

  saveData() {
    return this.httpClint.put('https://hongfei-recipe.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchData() {
    return this.httpClint.get('https://hongfei-recipe.firebaseio.com/recipes.json');
  }
}
