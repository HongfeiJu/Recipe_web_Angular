import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hongshao Pork', 'most popular pork cooking',
      'https://ali.xinshipu.cn/20110825/original/1314251955118.jpg@288w_216h_99q_1e_1c.jpg'),
    new Recipe('Kongbao Chicken', 'most popular chicken cooking',
      'https://i.pinimg.com/474x/14/1f/65/141f65a728bd8847d83093ed9a1cd7ce--gong-bao-chicken-asian-foods.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
