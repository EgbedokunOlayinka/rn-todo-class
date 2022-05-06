import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface ITodo {
  id: string;
  title: string;
}

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (val: string) => {
    setTodos((prev) => [...prev, { id: "" + Math.random(), title: val }]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 20,
    backgroundColor: "#333",
  },
});
