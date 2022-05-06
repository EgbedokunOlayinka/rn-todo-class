import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  id: string;
  deleteTodo: (id: string) => void;
}

const Todo = ({ title, id, deleteTodo }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => deleteTodo(id)}>
        <Text style={styles.btnText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    borderRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  btn: {
    borderRadius: 50,
    backgroundColor: "red",
    height: 24,
    width: 24,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});

export default Todo;
