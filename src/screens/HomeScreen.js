import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 2 Ways to implement a button
// 1. Primitive element
// 2. TouchableOpacity (Highly customizable for complex interactions)
// Can pass string values to props without using curly braces (Rare exception for JSX)
// Can both pass props into components e.g. style, and receive them into components
const HomeScreen = ({navigation}) => {
// Defining props as first argument for function assigns it highest level object 
// Stack navigator library provides several properties / functions for the concerned object
// Navigate is one such function which can be called with a string
// Destructure props to access props.navigation and avoid typing out more than is needed
  console.log(navigation);

  return (
    <View>
      <Text style={styles.text}>0Regrets</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Components Demo"
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Lists Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Image Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Counter Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Colour')}
        title="Colour Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title="Square Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Reducer')}
        title="Reducer Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Convention')}
        title="Reducer Convention Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Ex2')}
        title="Counter using Reducer"
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title="Text Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Text Demo 2"
      />


      {/* Touchable Opacity has no default styling */}
      <TouchableOpacity onPress={() => {navigation.navigate('List')}}>
        <Text>TouchableOpacity</Text>
        <Text>List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
