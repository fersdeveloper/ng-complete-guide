import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
