import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({onPress, children, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 30,
    color: 'white',
  }
});

export default Button;