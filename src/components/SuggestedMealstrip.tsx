import React from "react";
import { View, FlatList } from "react-native";
import MealCard from "./MealCard";

export default function SuggestedMealsStrip({ meals }:any) {
  return (
    <View>
      <FlatList
        horizontal
        data={meals}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MealCard meal={item} />}
      />
    </View>
  );
}
