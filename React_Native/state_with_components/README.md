*[back to root directory](https://github.com/Maumasi/Portfolio/tree/master)*

# React Native: Manipulating State

This is a great segue to learn how properties can be passed between components across the entire app using a flux architecture. In this demo we'll just be looking at how using `state` we can pass data to components within the same class.

**Note**
This demo will not be going over how to start a React Native project or how to build components. There is a [Resources]() section at the end of this demo to aid in research not included here.

- [Resources]()

---
<br>

The component below has been simplified a bit. The most important properties to take note of are:
- `value`
- `onChangeText`
Properties, in React Native, are variables that will be passed in later after the component has been called somewhere else in the app. Right now they just need to be defined here in the *blueprint* of this component just like parameters would be in a function definition. <br>
The `value` is what is actually typed in the input field. The `onChangeText` property expects a function and is called every time the user types in the `TextInput`.

```JavaScript
import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = (props) => {
  const {
    label,
    value,
    onChangeText,
    placeholder,
  } = props;

  return (
    <View>
      <Text>{ label }</Text>
      <TextInput
        placeholder={ placeholder }
        value={ value }
        onChangeText={ onChangeText }
      />
    </View>
  );
};

export { Input };
```
<br>

In another file we'll create another component to present what the user is typing in the input field. This is about as simple as a typical component will get. The `title` property will simply be what the user types.
```JavaScript
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { title } = props;

  return (
    <View>
      <Text>{ title }</Text>
    </View>
  );
};

export { Header };
```
<br>

In an `App.js` file we'll make a class where we can use `state` to pass between the two components we built. <br>

In the example below `state` is initialized with an `input` property set to an empty string, this property could be named anything. Looking at the `Input` component you'll see that `onChangeText` is set to a function that takes in a parameter that represents the character typed in the input filed that triggered the function call. Every time `onChangeText` is fired off it calls another function, `this.setState()`. The `this.setState()` call takes an object that alters the property supplied and refreshes the whole class to reflect any changes that the `state` property may have effected. <br>

Since the `Header` component property is set to `this.state.input` the text in the `Header` will be whatever the user types in the input field because the input field is setting the `this.state.input`. This happens in real-time since the `this.setState()` call refreshed the class for us.

```JavaScript
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

// import the two components we created
import { Input, Header } from 'state_with_components/src/views/components/';

class App extends Component {

  // initialize state
  state = {
    input: '',
  }

  // app view
  render() {
    return (
      <View>
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

export default App;
```














## Resources
- [React Native Docs](https://facebook.github.io/react-native/)
- [React Native components](https://facebook.github.io/react-native/docs/tutorial.html)
