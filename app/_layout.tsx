import React from "react";
import { Stack } from "expo-router";
import { MealProvider } from "../src/context/MealContext";

export default function Layout() {
  return (
    <MealProvider>
      <Stack />
    </MealProvider>
  );
}
