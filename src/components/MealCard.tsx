import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MealCard({ meal }:any) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{meal.name}</Text>
      <Text>${meal.price.toFixed(2)}</Text>
      <Text>{meal.cuisineTag}</Text>
      <View style={styles.row}>
        {meal.allergens.map(a => (
          <Text key={a} style={styles.badge}>{a}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: "#eee" },
  name: { fontWeight: "bold" },
  row: { flexDirection: "row", flexWrap: "wrap" },
  badge: { backgroundColor: "#ccc", margin: 2, padding: 4 }
});
