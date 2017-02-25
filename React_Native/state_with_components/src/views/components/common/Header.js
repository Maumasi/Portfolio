
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Futura-Medium',
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 30,
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingTop: 65,
    position: 'relative',
  },
};

const Header = (props) => {
  const { title, textTheme, wrapperTheme } = props;
  const { headerTitle, headerWrapper } = styles;

  return (
    <View style={ [headerWrapper, wrapperTheme] } >
      <Text style={ [headerTitle, textTheme] }>{ title }</Text>
    </View>
  );
};

export { Header };
