
import React from 'react';
import { Text, View, TextInput } from 'react-native';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { loginInput, boxShadow } = themes;

const styles = {
  input: {
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
  },

  lableStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 2,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const { wrapper, lableStyle, input } = styles;

const Input = (props) => {
  const {
    lable,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    autoFocus,
    autoCapitalize,
    returnKeyType,
    onSubmitEditing,
    keyboardType,
    returnKeyLabel,
    inputTheme,
    textTheme,
  } = props;

  return (
    <View style={ [loginInput, boxShadow, wrapper] }>
      <Text style={ [input, textTheme] }>{ lable }</Text>
      <TextInput
        placeholder={ placeholder }
        autoCorrect={ false }
        style={ [lableStyle, inputTheme] }
        value={ value }
        onChangeText={ onChangeText }
        secureTextEntry={ secureTextEntry }
        autoFocus={ autoFocus }
        autoCapitalize={ autoCapitalize }
        returnKeyType={ returnKeyType }
        onSubmitEditing={ onSubmitEditing }
        keyboardType={ keyboardType }
        returnKeyLabel={ returnKeyLabel }
      />
    </View>
  );
};

export { Input };
