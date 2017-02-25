
import React from 'react';
import { View, TextInput } from 'react-native';

const styles = {
  lableStyle: {
    fontSize: 18,
    padding: 5,
    height: 100,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 10,
    paddingLeft: 10,
  },
};

const { lableStyle } = styles;

const TextArea = (props) => {
  const {
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
    multiline,
    autoCorrect,
    theme,
  } = props;

  return (
    <View style={ [theme] }>
      <TextInput
        multiline={ multiline }
        placeholder={ placeholder }
        autoCorrect={ autoCorrect }
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

export { TextArea };
