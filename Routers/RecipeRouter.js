import express from "express";
import {CreateRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe,} from "../Controllers/RecipeController.js"


const router = express.Router();

router.post("/create",CreateRecipe)
router.get("/getdata",getAllRecipes)
router.get("/getdata/:id",getRecipeById)
router.put("/update/:id",updateRecipe)
router.delete("/delete/:id",deleteRecipe)

export default router;