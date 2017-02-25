import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { updateBreadCrumb, breadCrumbUpdateDB } from 'Bread_Crumbs/src/controllers/actions/';
import { mapMove } from 'Bread_Crumbs/src/controllers/actions/';

import { TextArea, Input, SwitchRadioButton } from 'Bread_Crumbs/src/views/components/';

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

class BreadCrumbForm extends Component {
  render() {

    console.log(this.props);
    return(
      <View>
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
          text={ 'Hide Crumb For Now' }
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {

  const { menuState } = state.menu;

  const { discoverable, message, title, uid } = state.breadCrumbs;

  const { user } = state.auth;

  return {
    discoverable,
    message,
    title,
    uid,
    menuState,
    user,
  };
};

BreadCrumbForm = connect(mapStateToProps, { updateBreadCrumb, breadCrumbUpdateDB })(BreadCrumbForm);

export { BreadCrumbForm };
