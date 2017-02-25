
import React, { Component } from 'react';
import { Switch, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
// import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
const styles = {
  wrapper: {
    width: width - 60,
    padding: 10,
  },
  touchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  textTheme: {
    justifyContent: 'center',
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: 'rgba(0, 0, 0, 0.3)',
  },
};

const SwitchRadioButton = (props) => {
  const { theme, text, switchTheme, textTheme, value, onValueChange, onTintColor, tintColor } = props;

  return (
    <View style={ theme }>
      <TouchableWithoutFeedback style={ [styles.wrapper] } onPress={ onValueChange }>
        <View style={ [styles.touchable] }>
          <Switch
            style={ [switchTheme] }
            onValueChange={ onValueChange }
            value={ value }
            onTintColor={ onTintColor }
            tintColor={ tintColor }
          />

          <Text style={ [styles.textTheme, textTheme] } >{ text }</Text>
        </View>
    </TouchableWithoutFeedback>
    </View>
  );
};

export { SwitchRadioButton };
