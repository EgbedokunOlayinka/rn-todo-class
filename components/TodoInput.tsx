import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

type Props = {
  addTodo: (val: string) => void;
};

const TodoInput = ({ addTodo }: Props) => {
  const [todoValue, setTodoValue] = useState("");

  const handleAdd = () => {
    if (todoValue === "") return;

    addTodo(todoValue);

    setTodoValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Practice Javascript"
        placeholderTextColor="grey"
        value={todoValue}
        onChangeText={setTodoValue}
      />

      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={styles.btnText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    padding: 12,
    color: "white",
    borderRadius: 4,
  },
  btn: {
    backgroundColor: "green",
    marginTop: 12,
    padding: 14,
    borderRadius: 4,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },
});

export default TodoInput;
