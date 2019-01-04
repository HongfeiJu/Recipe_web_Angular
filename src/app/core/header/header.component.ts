import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeService} from '../../recipes/recipe.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Recipe} from '../../recipes/recipe.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('featureSelected') switchView = new EventEmitter<string>();
  constructor(private recipeService: RecipeService,
              private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSelect(para: string ) {
    this.switchView.emit(para);
  }

  onSaveData() {
    this.dataStorageService.saveData().subscribe(
      value => console.log('done' + value),
      error1 => console.log('error: ' + error1)
    );
  }

  onFetchData() {
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

  onLogOut() {
    this.authService.logOut();
  }

}
