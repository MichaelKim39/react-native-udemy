import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

// Generally state variables should be created in the most parent component where different state values are READ
// Not created in children components where state values are changed

// If child component needs to read state value, it can be passed from parent as a prop
// If child component needs to change state value, pass callback function from parent to child which changes parent's state variables

// Convention for true constant variables is to use CAPS and _UNDERSCORES_
const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // console.log(red);

    // Helper function to implement bounds
    const setColour = (colour, change) => {
        // colour == 'red', 'green', 'blue'
        // change == +COLOR_INCREMENT, -COLOR_INCREMENT
        // To prevent rgb values from becoming excessively positive / negative
        // Use switch statement + ternary expressions instead of nested ifs for cleaner code
        switch(colour) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return; // To avoid falling through to other cases
            case 'green': 
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;  
            case 'blue': 
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return; 
            default: 
                return;
        }
    };

    return (
        <View>
            <ColourCounter 
                colour="Red"
                // NB curly braces only required after arrow function for more than 1 line of logic
                // Bad bounds implementation: reuse alot of code unneccessarily and makes code un-readable
                    // onIncrease={() => {
                    //     if (red + COLOR_INCREMENT) {
                    //         return;
                    //     }
                    //     setRed(red + COLOR_INCREMENT)
                    // }} 
                onIncrease={() => {setColour('red', COLOR_INCREMENT)}} 
                onDecrease={() => {setColour('red', -1 * COLOR_INCREMENT)}}
            />
            <ColourCounter 
                colour="Blue"
                onIncrease={() => {setColour('blue', COLOR_INCREMENT)}} 
                onDecrease={() => {setColour('blue', -1 * COLOR_INCREMENT)}}
            />
            <ColourCounter 
                colour="Green"
                onIncrease={() => {setColour('green', COLOR_INCREMENT)}} 
                onDecrease={() => {setColour('green', -1 * COLOR_INCREMENT)}}
            />

            {/* 
            Outer Curly braces = reference JS code
            Inner Curly braces = create object literal 
            */}

            <View 
                style={{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})` 
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({});

export default SquareScreen;

// Notes
// Reducer = function that manages changes to an object
// Good candidate conditions for management through a reducer:
    // Separate pieces of state that are closely related
    // Precise and well-known ways to update state values
// Reducer gets called with 2 object arguments
// Object 1 = object that holds all states inside (red: 0, green: 0, blue: 0)
// Object 2 = object describing change to be made (color: red, change: +15)

// NB state objects STILL never modified directly, even when passed as argument
// NB Reducer works by returning objects to use as the new state variable(s)