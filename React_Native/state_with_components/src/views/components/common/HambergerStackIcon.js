import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { menuOpened } from 'Bread_Crumbs/src/controllers/actions/';

const styles = {
  iconWrapper: {
    justifyContent: 'space-around',
    width: 38,
    height: 28,
    padding: 2,
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  iconBars: {
    marginHorizontal: 5,
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
};

class HambergerStackIcon extends Component {

  onMenuIconPress() {
    const bool = true;
    this.props.menuOpened(bool);
  }

  render() {
    return (
      <TouchableOpacity style={ [styles.iconWrapper] } onPress={ this.onMenuIconPress.bind(this) } >
        <View style={ [styles.iconBars] } />
        <View style={ [styles.iconBars] } />
        <View style={ [styles.iconBars] } />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  const { menuState } = state.menu;
  return {
    menuState,
  };
};

HambergerStackIcon = connect(mapStateToProps, { menuOpened })(HambergerStackIcon);
export { HambergerStackIcon };
