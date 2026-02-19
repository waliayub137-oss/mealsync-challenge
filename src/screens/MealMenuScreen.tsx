import React, { useContext, useState, useMemo } from "react";
import { View, FlatList, Button, StyleSheet, } from "react-native";
import { MealContext } from "../context/MealContext";
import MealCard from "../components/MealCard";
import ChildSelector from "../components/ChildSelector";
import SuggestedMealsStrip from "../components/SuggestedMealstrip";
import children from "../../mockdata/children.json";
import { getSuggestedMeals } from "../utils/mealSuggestions";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MealMenuScreen() {
  const { meals } = useContext(MealContext);
  const [selectedChild, setSelectedChild] = useState(children[0]);

  const suggestions = useMemo(() => {
    return getSuggestedMeals(meals, selectedChild);
  }, [meals, selectedChild]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ChildSelector setSelectedChild={setSelectedChild} />
        <View style={styles.adminButton}>
          <Button title="Admin" onPress={() => router.push("/admin")} />
        </View>
      </View>

      <View style={styles.suggestions}>
        <SuggestedMealsStrip meals={suggestions} />
      </View>

      <FlatList
        style={styles.mealList}
        showsVerticalScrollIndicator={false}
        data={meals.filter((m) => m.isActive)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard meal={item} />}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  adminButton: {
    borderRadius: 8,
    overflow: "hidden",
  },
  suggestions: {
    marginVertical: 15,
  },
  mealList: {
    flex: 1,
  },
});
