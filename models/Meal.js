class Meal {
    constructor(
        id, 
        categoryId,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGluentFree,
        isVegan,
        IsVegetarian,
        isLactoseFree,
    ){
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGluentFree = isGluentFree;
        this.isVegan = isVegan;
        this.IsVegetarian = IsVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;