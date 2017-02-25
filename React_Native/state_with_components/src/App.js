
// import React, { Component } from 'react';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Input, Header } from 'state_with_components/src/views/components/';

class App extends Component {

  state = {
    input: '',
  }

  // app view
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          A simple demo on state with React Native
        </Text>

        <Input
          label={'Demo'}
          value={this.state.input}
          placeholder={'Type to watch state change'}
          onChangeText={(input) => {
            this.setState({ input });
          }}
        />

        <Header
          title={this.state.input}
        />
      </View>
    );
  }
}// class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App;
