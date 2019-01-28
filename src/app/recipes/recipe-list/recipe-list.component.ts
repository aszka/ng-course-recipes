import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('A test recipe 2', 'This is simply a test 2', 'https://www.maxpixel.net/static/photo/1x/Food-Dishes-Eat-Gastronomy-Lunch-Recipe-2760200.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
