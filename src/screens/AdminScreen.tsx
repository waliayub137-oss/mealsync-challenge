import React, { useContext } from "react";
import { View, Text, FlatList, Switch, StyleSheet, } from "react-native";
import { MealContext } from "../context/MealContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AdminScreen() {
  const { meals, dispatch } = useContext(MealContext);

  const toggleMeal = (id) => {
    dispatch({
      type: "TOGGLE_MEAL_ACTIVE",
      payload: id,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <FlatList
        data={meals}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text style={styles.mealName}>{item.name}</Text>
            <Switch
              trackColor={{ false: "#ccc", true: "#4CAF50" }}
              thumbColor={item.isActive ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#ccc"
              onValueChange={() => toggleMeal(item.id)}
              value={item.isActive}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  mealItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  mealName: {
    fontSize: 16,
    color: "#333",
  },
});
