export const mealReducer = (state: { meals: any[]; }, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "TOGGLE_MEAL_ACTIVE":
      return {
        ...state,
        meals: state.meals.map(meal =>
          meal.id === action.payload
            ? { ...meal, isActive: !meal.isActive }
            : meal
        )
      };
    default:
      return state;
  }
};
