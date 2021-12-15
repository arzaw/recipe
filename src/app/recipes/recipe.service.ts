import { report } from "process";
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe('Test','This is simply a test huh','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('Test 1', 2),
            new Ingredient('test 1.1',4)
        ]),
        new Recipe('Test-2','This is simply a test huh','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('Test 2', 3),
            new Ingredient('test 2.1',5)
        ])
      ];
    
      constructor(private slService: ShoppingListService){

      }
    getRecipe(){
        return this.recipes.slice()
    }

    addIngredient(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}