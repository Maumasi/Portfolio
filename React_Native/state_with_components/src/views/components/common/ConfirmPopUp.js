import React, { Component } from 'react';
import { Text, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
// import { updateBreadCrumb, createBreadCrumb } from 'Bread_Crumbs/src/controllers/actions/';
import firebase from 'firebase';

import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

import { Button, Section } from 'Bread_Crumbs/src/views/components/';

const styles = {
  theme: {
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },

  textTheme: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    letterSpacing: 1,
    fontWeight: 'bold',
  },

  sectionTheme: {
    padding: 2,
  },

  buttonWrapper: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  buttonTheme: {
    margin: 0,
    width: ((width / 2) - 20),
  },

  yesButton: {
    backgroundColor: 'rgba(238, 100, 86, 0.6)',
    letterSpacing: 1,
    color: '#FFF',
  },

  noButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
};

const ConfirmPopUp = (props) => {
  const { children, onYes, onNo, visible, theme, textTheme, sectionTheme, buttonTheme } = props;

  return (
    <Modal
      animationType={ 'slide' }
      onRequestClose={ () => {} }
      transparent={ true }
      visible={ visible }

    >
      <View style={ [styles.theme, theme] }>
        <Section theme={ [styles.sectionTheme, sectionTheme] }>
          <Text style={ [styles.textTheme, textTheme] }>{ children }</Text>
        </Section>

        <Section theme={ [styles.sectionTheme, styles.buttonWrapper, sectionTheme] }>
          <Button
            theme={ [styles.buttonTheme, buttonTheme] }
            textTheme={ styles.noButton }
            onPress={ onNo }
            buttonTitle={ 'No' }
          />

          <Button
            theme={ [styles.buttonTheme, buttonTheme] }
            textTheme={ styles.yesButton }
            onPress={ onYes }
            buttonTitle={ 'Yes' }
          />

        </Section>
      </View>
    </Modal>
  );
};

export { ConfirmPopUp };
