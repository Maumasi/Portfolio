import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = {
  theme: {
    position: 'absolute',
    zIndex: 2,
    right: ((width / 2) - 100),
    top: (height - 120),
  },

  buttonTheme: {
    backgroundColor: 'rgba(26, 188, 156, 0.9)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 200,
  },

  textTheme: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
};

const CircleButton = (props) => {
  const { text, theme, onPress } = props;

  return (
    <View style={ [styles.theme, theme] }>
      <TouchableOpacity style={ [styles.buttonTheme] } onPress={ onPress }>
        <Text style={ [styles.textTheme] }>{ text }</Text>
      </TouchableOpacity>
    </View>
  );
};

export { CircleButton };
