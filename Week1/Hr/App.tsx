import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("");
  const ageAsNumber: number =
    !isNaN(Number(age)) && age !== "" ? Number(age) : 0;

  const lowerLimit: number =
    age !== "" && !isNaN(Number(age)) ? (220 - ageAsNumber) * 0.65 : 0;
  const upperLimit: number =
    age !== "" && !isNaN(Number(age)) ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)}</Text>
      <Text style={styles.text}>Upper limit: {upperLimit.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  text: {
    marginVertical: 16,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    width: "30%",
  },
});
