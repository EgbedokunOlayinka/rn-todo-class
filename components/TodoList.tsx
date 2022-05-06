import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ITodo } from "../App";
import Todo from "./Todo";

type Props = {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
};

const TodoList = ({ todos, deleteTodo }: Props) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo title={item.title} id={item.id} deleteTodo={deleteTodo} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
