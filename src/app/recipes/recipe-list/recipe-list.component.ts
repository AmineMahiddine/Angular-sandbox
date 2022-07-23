import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('A test recipe', 'here is some description', 'https://runningonrealfood.com/wp-content/uploads/2021/02/Vegan-One-Pot-Pasta-Recipe.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
