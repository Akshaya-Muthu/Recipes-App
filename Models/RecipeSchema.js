import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Recipes = mongoose.model("Recipes", RecipeSchema);

export default Recipes;