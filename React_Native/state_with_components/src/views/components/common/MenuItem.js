import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  menuItem: {
    padding: 15,
    paddingLeft: 20,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderLeftWidth: 2,
    borderLeftColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    fontWeight: 'bold',
  },
};

const MenuItem = (props) => {
  const { onPress, text, theme, textTheme } = props;

  return (
    <TouchableOpacity style={ [styles.menuItem, theme] } onPress={ onPress } >
      <Text style={ [styles.text, textTheme] } >{ text }</Text>
    </TouchableOpacity>
  );
};

export { MenuItem };
