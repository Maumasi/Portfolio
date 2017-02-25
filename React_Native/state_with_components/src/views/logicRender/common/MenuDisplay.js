import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import state from 'Bread_Crumbs/src/controllers/actions/';

// screens
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

class MenuDisplay extends Component {

  shouldMenuBeDisplayed() {
    let result;

    switch (this.props.menu.menuState) {
      case true:
        result = <HambergerStackMenu />;
        break;
      default:
        result = <HambergerStackMenu />;
    }

    return result;
  }

  render() {
    console.log(this.shouldMenuBeDisplayed());
    return;
  }
}

const mapStateToProps = ({ state }) => {

  return state;
};

MenuDisplay = connect(mapStateToProps, { state })(MenuDisplay);
export default MenuDisplay;
