// app loading screen
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Header, ScreenWrapper, LoadingSpinner } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { bgGreen, loginIcon, logoIcon, loadingMessage } = themes;
StatusBar.setBarStyle('light-content');

const styles = {
  spinner: {
    opacity: 0.8,
  },
};

class MapLoadingScreen extends Component {

  componentWillMount() {
    Actions.mapActivities();
  }

  render() {
    return (
      <ScreenWrapper>

        <ScreenWrapper theme={ bgGreen }>
          <Header textTheme={ loadingMessage } title={ 'Opening Bread Crumbs' }/>
          <Image style={ [loginIcon, styles.spinner] } source={ logoIcon } />
        </ScreenWrapper>

        <ScreenWrapper>
          <LoadingSpinner color={ '#FFF' } />
        </ScreenWrapper>
      </ScreenWrapper>
    );
  } // render
} // class

export { MapLoadingScreen };
