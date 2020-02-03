import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// useState is a hook - adds new functionality to a functional component like button
// useState allows us to create special variables that react watches + automatically updates display

const CounterScreen = () => {
    // Incorrect! No automatic detection of changing variables
    // React doesn't know when to updae display
    // let counter = 0;

    // Correct! 
    // Pass initial value to useState
    // Array destructuring used (square brackets)
    // Counter is assigned initial value (0)
    // Set counter is the second element and is a function used to update the variable
    const [counter, setCounter] = useState(0);
    // NB: counter and setCounter are variables, can take any name
    // NB: states can track any dynamic data - not just counters / primitives
    // NB: rendering states re-renders all child components too! 

    // Note: Creating state variables in custom components that are re-used will render a separate state for each instance 
    // NB!!! Props = passing data from parent to child, State = tracking changing data

    return (
    <View>
        <Button title="Increase" onPress={() => {
            // Bad! Don't modify state variables directly - react doesn't know how to handle this
            // counter++;
            setCounter(counter + 1);
            // NB: Console.log will not detect update of counter's value due to time taken to increment
            // After setCounter is called the outer function "CounterScreen" is re-run
            // React keeps track of if a state has been rendered already or not (No re-initialisation)
            // React community favours functional components over class based ones
            console.log(counter);
        }}/>
        <Button title="Decrease" onPress={() => {
            // counter--;
            setCounter(counter - 1);
            console.log(counter);
        }}/>
    <Text>Current Count: {counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;