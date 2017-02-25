
import React from 'react';
import { View } from 'react-native';

const styles = {
  section: {
    padding: 5,
  },
};

const Section = (props) => {
  const { children, theme } = props;
  const { section } = styles;
  return (
    <View style={ [section, theme] }>
      { children }
    </View>
  );
};

export { Section };
