// object creation

class Ingredient {
  item = [];
  constructor(name, quantity) {
    if (!name)
      throw new Error("You need to provide an ingredient name and a quantity");
    //need to re-write this as both name and quantity need to be provided in order to add an ingredient to the item array
    this.name = name;
    this.quantity = quantity;
    this.available = true; //needs to be true of false
  }
  addQuantity(number) {
    if (isNaN.number) return quantity + number;
    console.log(`you have ${this.quantity}, ${this.name}`);
  }
  /*check if */
  isAvailable(quantity) {
    const available = (quantity) => quantity > 0;
    return item.every(available);

    //  if (!this.quantity === 0) return available;
    // return (available = true)
  }
  /* remove the quantity used from the total quatity available for an item  */
  adjustQuantity(quantity) {
    const newQuantity = this.quantity - quantity;
    return newQuantity;
  }
}
//holding and managing instances

class Recipe {
  ingredients = [];
  constructor(title, ingredient) {
    this.title = title;
    this.ingredient = ingredient;
  }

  addIngredient(item) {
    this.ingredients.push(item);
  }

  /* makeRecipe will check if the ingredients needed are availavbe and if they are it will removet the quantity needed from the total ingredients available  */
  makeRecipe() {
    for (const item of this.ingredients) {
      if (!this.ingredient.isAvailable) {
        return;
      }
      item.removeIngredient(this.ingredient.pop());
    }
  }
}

const fruit = new Ingredient("apple", 5);
const butter = new Ingredient("butter", 0);
console.log(fruit, butter);

const applePie = new Recipe("Apple Pie", "apple");
console.log(applePie);
