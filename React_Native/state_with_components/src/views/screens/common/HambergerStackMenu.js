import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { menuClosed } from 'Bread_Crumbs/src/controllers/actions/';

const { width, height } = Dimensions.get('window');

// components
import { ScreenWrapper, Header, Button, MenuItem } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { emptyMenuSide, menuSide } = themes;

const styles = {
  menuOrentation: {
    flexDirection: 'row',
    width,
    height,
  },
  menuHeader: {
    paddingBottom: 5,
    alignItems: 'flex-start',
  },
};

const { menuOrentation, menuHeader } = styles;

const CustomLayoutSpring = {
  duration: 30,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 1,
  },
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.0,
  },
};

class HambergerStackMenu extends Component {

  onEmptySidePress() {
    this.props.menuClosed(false);
  }

  onMenuItemPress() {
    console.log('Menu item!');
  }

  onMenuSidePress() {
    console.log('this is the menu side!');
  }

  // menu navigation action calls

  crumbMap() {
    this.props.menuClosed(true);
    Actions.mapArea({ type: 'reset' });
  }

  nearByCrumbs() {
    this.props.menuClosed(true);
    Actions.proximityCrumbs();
  }

  myCrumbs() {
    this.props.menuClosed(true);
    Actions.myBreadCrumbs();
  }

  myFavs() {
    this.props.menuClosed(true);
    Actions.favCrumbs();
  }

  signOutUser() {
    this.props.menuClosed(false);
    firebase.auth().signOut();
    Actions.login();
  }

  render() {
    LayoutAnimation.configureNext(CustomLayoutSpring);

    return (
      <ScreenWrapper theme={ menuOrentation } >

        <TouchableWithoutFeedback onPress={ this.onEmptySidePress.bind(this) } >
          <View style={ emptyMenuSide } />
        </TouchableWithoutFeedback>


        <View style={ menuSide } >
          <Header
            title={ 'Menu' }
            wrapperTheme={ menuHeader }
          />

          <MenuItem text={ 'Map' } onPress={ this.crumbMap.bind(this) } />

          <MenuItem text={ 'My Favs' } onPress={ this.myFavs.bind(this) } />

          <MenuItem text={ 'Bread Crumbs Near Me' } onPress={ this.nearByCrumbs.bind(this) } />

          <MenuItem text={ 'My Bread Crumbs' } onPress={ this.myCrumbs.bind(this) } />

          <MenuItem text={ 'Log out' } onPress={ this.signOutUser.bind(this) } />
        </View>
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { menuState } = state.menu;
  return {
    menuState,
  };
};

HambergerStackMenu = connect(mapStateToProps, { menuClosed })(HambergerStackMenu);
export { HambergerStackMenu };
