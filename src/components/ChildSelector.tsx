import React from "react";
import { View, Button } from "react-native";
import children from "../../mockdata/children.json";

export default function ChildSelector({ setSelectedChild }:any) {
  return (
    <View>
      {children.map(child => (
        <Button
          key={child.id}
          title={child.name}
          onPress={() => setSelectedChild(child)}
        />
      ))}
    </View>
  );
}
