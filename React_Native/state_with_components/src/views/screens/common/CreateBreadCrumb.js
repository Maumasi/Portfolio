import React, { Component } from 'react';
import { Switch, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { updateBreadCrumb, createBreadCrumb } from 'Bread_Crumbs/src/controllers/actions/';
import firebase from 'firebase';

// components
import {
  ScreenWrapper,
  Header,
  Button,
  MenuItem,
  TextArea,
  Input,
  SwitchRadioButton
} from 'Bread_Crumbs/src/views/components/';

// partials
import { BreadCrumbForm } from 'Bread_Crumbs/src/views/partials/';

// menu
import { HambergerStackMenu } from 'Bread_Crumbs/src/views/screens/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { loginInput } = themes;

const styles = {
  theme: {
    backgroundColor: 'rgb(26, 188, 156)',
  },

  createCrumbHeader: {
    paddingTop: 60,
    paddingBottom: 5,
    marginBottom: 5,
  },

  textTitle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
  },

  textArea: {
    height: 200,
    borderRadius: 3,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },

  buttonTheme: {
    marginTop: 60,
  },
};

class CreateBreadCrumb extends Component {

  menuDisplay() {
    let result;

    if (this.props.menuState) {
      result = <HambergerStackMenu />;
    } else {
      result = null;
    }
    return result;
  }

  onDiscoverableSwitch(value) {
    this.props.updateBreadCrumb({
      prop: 'discoverable',
      value,
    });
  }

  onButtonPress() {

    const {
      title,
      message,
      discoverable,
      user,
     } = this.props;

    navigator.geolocation.getCurrentPosition((geo) => {

      const date = new Date().toISOString();
      this.props.updateBreadCrumb({
        prop: 'createdAt',
        value: date,
      });

      this.props.updateBreadCrumb({
        prop: 'userId',
        value: user.uid,
      }); // updateBreadCrumb

      this.props.createBreadCrumb({
        title,
        message,
        discoverable,
        lat: geo.coords.latitude,
        lng: geo.coords.longitude,
        createdAt: date,
        userId: user.uid,
      });
    }); // getCurrentPosition
  }

  render() {
    return (
      <ScreenWrapper theme={ styles.theme }>
        <Header
          wrapperTheme={ styles.createCrumbHeader }
          textTheme={ styles.textTitle }
          title={ 'Leave a Bread Crumb' }
        />

        <BreadCrumbForm { ...this.props } />

        <Button
          theme={ styles.buttonTheme }
          buttonTitle={ 'Drop this Bread Crumb' }

          onPress={ this.onButtonPress.bind(this) }
        />

        { this.menuDisplay() }
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    title,
    message,
    discoverable,
    lat,
    lng,
    createdAt,
    userId,
  } = state.breadCrumbs;

  const { menuState } = state.menu;

  const { user } = state.auth;

  return {
    title,
    message,
    discoverable,
    lat,
    lng,
    createdAt,
    userId,
    menuState,
    user,
  };
};

CreateBreadCrumb = connect(mapStateToProps, { updateBreadCrumb, createBreadCrumb })(CreateBreadCrumb);
export { CreateBreadCrumb };
