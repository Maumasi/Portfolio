
import React from 'react';
import { View } from 'react-native';

const styles = {
  wrapper: {
    // flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};

const { wrapper } = styles;
const ScreenWrapper = (props) => {

  const { children, theme } = props;
  return (
   <View style={ [wrapper, theme] }>
    { children }
   </View>
 );
};

export { ScreenWrapper };
