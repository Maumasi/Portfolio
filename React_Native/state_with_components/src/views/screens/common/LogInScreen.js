// login screen

import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';

// components
import { Header, ScreenWrapper } from 'Bread_Crumbs/src/views/components/';

// partials
import { LogInForm } from 'Bread_Crumbs/src/views/partials/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { bgGreen, loginIcon, logoIcon, loginText } = themes;
StatusBar.setBarStyle('light-content');

const styles = {
  headerText: {
    fontSize: 30,
  },
};

class LogInScreen extends Component {

  render() {
    return (
      <ScreenWrapper theme={ bgGreen }>
        <Header textTheme={ [loginText, styles.headerText] } title={ 'Bread Crumbs' } />

        <Image style={ loginIcon } source={ logoIcon } />

        <LogInForm />

      </ScreenWrapper>
    );
  }
}

export { LogInScreen };
