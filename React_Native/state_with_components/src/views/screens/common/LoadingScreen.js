// log out loading screen

import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { Header, ScreenWrapper, LoadingSpinner } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { bgGreen } = themes;
StatusBar.setBarStyle('light-content');

const styles = {
  headerStyle: {
    color: 'rgba(0, 0, 0, 0.8)',
  },
};

const LoadingScreen = (props) => {
  const { title, spinnerColor } = props;
  return (
    <ScreenWrapper>
      <ScreenWrapper theme={ bgGreen }>
        <Header textTheme={ styles.headerStyle } title={ title || 'Loading' }/>
      </ScreenWrapper>

      <ScreenWrapper>
        <LoadingSpinner color={ spinnerColor || '#FFF' } />
      </ScreenWrapper>
    </ScreenWrapper>
  );
};

export { LoadingScreen };
