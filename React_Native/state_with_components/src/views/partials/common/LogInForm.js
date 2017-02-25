import React, { Component } from 'react';
// import { Text } from 'react-native';
import { connect } from 'react-redux';

// redux actions
import { emailChanged, passwordChanged, logInUser } from 'Bread_Crumbs/src/controllers/actions/';

// components
import { Input, Section, Button, LoadingSpinner, ErrorMessage, Header } from 'Bread_Crumbs/src/views/components/';

// themes
import themes from 'Bread_Crumbs/src/views/stylesheets/themes';
const { loginInput, boxShadow, errorStyles, loadingMessage } = themes;

class LogInForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.logInUser({ email, password });
  }

  renderForm() {
    let result;
    if (this.props.loading) {
      result = (
        <Section>
          <Header title={ 'Lets get you logged in' } />
          <LoadingSpinner />
        </Section>
      );
    } else {
      result = (
        <Section>

          <ErrorMessage>
            { this.props.error }
          </ErrorMessage>


          <Input
            lable={ 'Email' }
            placeholder={ 'example@mail.com' }
            value={ this.props.email }
            onChangeText={ this.onEmailChange.bind(this) }
            autoFocus
            returnKeyType={ 'next' }
            returnKeyLabel={ 'next' }
            autoCapitalize={ 'none' }
            keyboardType={ 'email-address' }
          />

          <Input
            lable={ 'Password' }
            value={ this.props.password }
            placeholder={ 'password123' }
            onChangeText={ this.onPasswordChange.bind(this) }
            secureTextEntry
            returnKeyType={ 'go' }
            returnKeyLabel={ 'go' }
            autoCapitalize={ 'none' }
          />

          <Button
            buttonTitle={ 'Log In' }
            onPress={ this.onButtonPress.bind(this) }
          />

        </Section>
      );
    }

    return result;
  }

  render() {
    return this.renderForm();
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

LogInForm = connect(mapStateToProps, { emailChanged, passwordChanged, logInUser })(LogInForm);
export { LogInForm };
