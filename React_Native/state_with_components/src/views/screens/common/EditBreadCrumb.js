import _ from 'lodash';
import React, { Component } from 'react';
import { Switch, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateBreadCrumb, breadCrumbUpdateDB, deleteBreadCrumb } from 'Bread_Crumbs/src/controllers/actions/';
import firebase from 'firebase';

// components
import {
  ScreenWrapper,
  Header,
  Button,
  MenuItem,
  TextArea,
  Input,
  SwitchRadioButton,
  ConfirmPopUp,
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

class EditBreadCrumb extends Component {
  state = { ConfirmDelete: false };

  componentWillMount() {
    _.each(this.props.breadCrumb, (value, prop) => {
      this.props.updateBreadCrumb({ prop, value });
    });
  }

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
    this.props.breadCrumbUpdateDB({ update: this.props });
  }

  onConfirmDelete() {
    const { uid } = this.props.breadCrumb;
    this.props.deleteBreadCrumb({ uid });
    this.setState({ ConfirmDelete: false });
  }

  render() {
    return (
      <ScreenWrapper theme={ styles.theme }>
        <Header
          wrapperTheme={ styles.createCrumbHeader }
          textTheme={ styles.textTitle }
          title={ 'Edit Bread Crumb' }
        />

        <Input
          lable={ 'Title:' }
          placeholder={ 'Short and Sweet' }
          value={ this.props.title }
          style={ [styles.textTitle, loginInput] }
          inputTheme={{ flex: 5 }}
          autoFocus

          onChangeText={ (value) => {
            this.props.updateBreadCrumb({
              prop: 'title',
              value,
            });
          }}
        />

        <TextArea
          multiline
          placeholder={ 'Leave a Bread Cumb in the world!' }
          value={ this.props.message }
          autoCorrect
          inputTheme={ [loginInput, styles.textArea] }
          autoCapitalize={ 'sentences' }

          onChangeText={ (value) => {
            this.props.updateBreadCrumb({
              prop: 'message',
              value,
            });
          }}
        />

        <SwitchRadioButton
          text={ 'Hide Crumb untill discovered' }
          value={ this.props.discoverable }
          tintColor={ '#000' }
          onTintColor={ '#000' }

          onValueChange={ (value) => {
            this.props.updateBreadCrumb({
              prop: 'discoverable',
              value,
            });
          }}
        />

        <Button
          theme={ styles.buttonTheme }
          buttonTitle={ 'Save Edit' }
          onPress={ this.onButtonPress.bind(this) }
        />

        <Button
          theme={ styles.buttonTheme }
          buttonTitle={ 'Delete' }
          onPress={ () => this.setState({ ConfirmDelete: !this.state.ConfirmDelete }) }
        />

        <ConfirmPopUp
          visible={ this.state.ConfirmDelete }
          onYes={ this.onConfirmDelete.bind(this) }
          onNo={ () => this.setState({ ConfirmDelete: !this.state.ConfirmDelete }) }
        >
          <Text>Did you want to delete this?</Text>
        </ConfirmPopUp>

        { this.menuDisplay() }
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state) => {

  const { menuState } = state.menu;

  const { user } = state.auth;

  const {
    title,
    message,
    discoverable,
    lat,
    lng,
    createdAt,
    userId,
  } = state.breadCrumbs;

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

EditBreadCrumb = connect(mapStateToProps, { updateBreadCrumb, breadCrumbUpdateDB, deleteBreadCrumb })(EditBreadCrumb);
export { EditBreadCrumb };
