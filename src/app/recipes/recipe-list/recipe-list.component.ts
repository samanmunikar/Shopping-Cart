import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is a simply a test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2019/01/b983c6ba185a60b0899484be6fac15f59c05e75a.jpeg'),
  new Recipe('A test Recipe', 'This is a simply a test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2019/01/b983c6ba185a60b0899484be6fac15f59c05e75a.jpeg')
  
];

  constructor() { }

  ngOnInit() {
  }

}
