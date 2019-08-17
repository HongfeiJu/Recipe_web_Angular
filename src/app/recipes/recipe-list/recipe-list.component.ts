import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService,) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChange.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
    this.fetchData();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchData() {
    this.dataStorageService.fetchData().subscribe(
      (recipes: Recipe[]) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        this.recipeService.loadRecipes(recipes);
      }
    );
  }

}
