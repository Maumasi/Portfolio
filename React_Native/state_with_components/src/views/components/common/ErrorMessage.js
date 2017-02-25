
import React from 'react';
import { Text } from 'react-native';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { errorStyles } = themes;

const ErrorMessage = (props) => {

  const { children, theme } = props;
  return (
    <Text style={ [errorStyles, theme] }>
      { children }
    </Text>
  );
};

export { ErrorMessage };
