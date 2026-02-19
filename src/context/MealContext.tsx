import React, { createContext, useReducer, Dispatch } from "react";
import mealsData from "../../mockdata/meals.json";
import { mealReducer } from "./mealReducer";

type Meal = {
  id: string;
  name: string;
  price: number;
  cuisineTag: string;
  allergens: string[];
  dietaryTags: string[];
  isActive: boolean;
};

type State = {
  meals: Meal[];
};

type Action = {
  type: string;
  payload: string;
};

type MealContextType = {
  meals: Meal[];
  dispatch: Dispatch<Action>;
};

export const MealContext = createContext<MealContextType>({
  meals: [],
  dispatch: () => null
});

export const MealProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: State = {
    meals: mealsData
  };

  const [state, dispatch] = useReducer(mealReducer, initialState);

  return (
    <MealContext.Provider value={{ meals: state.meals, dispatch }}>
      {children}
    </MealContext.Provider>
  );
};
