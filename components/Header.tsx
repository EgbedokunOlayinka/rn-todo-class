import React from "react";
import { StyleSheet, Text } from "react-native";

const Header = () => {
  return <Text style={styles.headerText}>TODO APP</Text>;
};

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 12,
  },
});

export default Header;
