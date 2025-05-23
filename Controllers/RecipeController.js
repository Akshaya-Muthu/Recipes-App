import Recipes from "../Models/RecipeSchema.js";

// create Recipe / post method

export const CreateRecipe = async (req, res) => {
  // const {name,price} = req.body
  // const newProd = {
  //     name:name,
  //     price:price
  // }
  // await newProd.save();

  try {
    const newRecipes = new Recipes(req.body); // req.body and assigning in a single line
    await newRecipes.save(); //saving the details in mongodb
    res
      .status(200)
      .json({ message: "Recipes Added Successfully", data: newRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all Recipes

export const getAllRecipes = async (req, res) => {
  try {
    const getRecipes = await Recipes.find();
    res
      .status(200)
      .json({ message: "Recipes Retrieved Successfully", data: getRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get Recipe by id

export const getRecipeById = async (req, res) => {
  try {
    const RecipeId = req.params.id;
    const RecipeDetail = await Recipes.findById(RecipeId);
    if (!RecipeDetail) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "Recipe retrieved successfully", data: RecipeDetail });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update method

export const updateRecipe = async (req, res) => {
  try {
    const RecipesId = req.params.id;
    const { name, price } = req.body;
    const result = await Recipes.findByIdAndUpdate(
      { _id: RecipesId },
      { name, price },
      { new: true }
    );
    if (result.matchedCount == 0) {
      return res.status(404).json({ message: "Recipes Not Found" });
    }
    res
      .status(200)
      .json({ message: "Recipes Updated Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//delete method

export const deleteRecipe = async(req,res)=>{
    try {
        const RecipesId = req.params.id;
        const result = await Recipes.findByIdAndDelete({_id: RecipesId})
        if(!result){
            return res.status(404).json({ message: "Recipes Not Found" }); 
        }
        const Recipe = await Recipes.find()
        res.status(200).json({message:"Recipes Deleted Successfully",data:Recipe})
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}