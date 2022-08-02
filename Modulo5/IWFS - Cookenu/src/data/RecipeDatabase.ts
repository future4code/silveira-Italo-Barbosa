import { BaseDatabase } from "./BaseDatabase";
import { Recipe } from "./Recipe";


export const Table = "Recipes";
export class RecipeDatabase extends BaseDatabase{



    public async creatRecipe(recipe:Recipe){
        try {
 
         await BaseDatabase.connection("Recipe")
         .insert({
           id: recipe.getId,
           title: recipe.getDescription,
           description: recipe.getDescription,
           date: recipe.getDate,
           token: recipe.getToken
           
         })
         .into(Table);
        } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
        } 
     }; 

    public async findRecipe(id:string):Promise<Recipe>{

      try {
          const Us = await BaseDatabase.connection("Recipe")
          .select("*")
          .where({id})

          return Recipe.toRecipe(Us[0])
          
      } catch (error:any) {
          throw new Error(error.sqlMessage || error.message)
      }
     }






}