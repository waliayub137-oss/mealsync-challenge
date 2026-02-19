export const getSuggestedMeals = (meals, child) => {
  if (!meals || !child) return [];
  const activeMeals = meals.filter(meal => meal.isActive);
  const safeMeals = activeMeals.filter(meal =>
    !meal.allergens.some(allergen =>
      child.allergens.includes(allergen)
    )
  );
  const scoredMeals = safeMeals.map(meal => {
    let score = 0;
    if (meal.dietaryTags.includes(child.dietaryPreference)) {
      score += 10;
    }
    return { ...meal, score };
  });
  scoredMeals.sort((a, b) => b.score - a.score);
  return scoredMeals.slice(0, 3);
};
