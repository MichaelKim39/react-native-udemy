import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

// New hook called useReducer (adds extra functionality to a function)

// Reducer = function that manages changes to an object
// Good candidate conditions for management through a reducer:
    // Separate pieces of state that are closely related
    // Precise and well-known ways to update state values
// Reducer gets called with 2 object arguments
// Object 1 = object that holds all states inside (red: 0, green: 0, blue: 0)
// Object 2 = object describing change to be made (color: red, change: +15)

// NB state objects STILL never modified directly, even when passed as argument
// NB Reducer works by returning objects to use as the new state variable(s)

const COLOUR_INCREMENT = 15;

// Define reducer function outside of component - confuses state argument with state object from useReducer call
// By convention second argument called "action" - describes how to change state object
const reducer = (state, action) => {
    // state == { red: num, blue: num, green: num}
    // action == {colourToChange == 'Red' || 'green' || 'bue',  amount == +COLOR_INCREMENT || -COLOUR_INCREMENT }
    switch(action.colourToChange) {
        case 'red':
            // NB Never modify state object directly 
            // Need to rebuid entire state object from scratch instead
            // Copy state object and overwrite red proper
            return state.red + action.amount > 255 || state.red + action.amount < 0 
                ? state 
                : {...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 
                ? state 
                : {...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 
                ? state 
                : {...state, blue: state.blue + action.amount };
        default:
            return state;
            // NB reducer function must always return a state object
    }
};
// When reducer eventually returns something, react automatically re-renders the main component
// React will provide us the returned object from the reducer as first object of useReducer() call after the re-render

const SquareReducer = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    // state assigned the second argument that we defined of useReducer
    // Dispatch is a function responsible for actually running reducer function and making changes
    // Dispatch just runs the reducer with arguments
    // By convention called dispatch but can be called whatever
    const { red, green, blue } = state;

    return (
        <View>
            <ColourCounter 
                colour="Red"
                onIncrease={() => dispatch({ colourToChange: 'red', amount: COLOUR_INCREMENT })} 
                onDecrease={() => dispatch({ colourToChange: 'red', amount: -1 * COLOUR_INCREMENT })}
            />
            <ColourCounter 
                colour="Blue"
                onIncrease={() => dispatch({ colourToChange: 'blue', amount: COLOUR_INCREMENT })} 
                onDecrease={() => dispatch({ colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT })}
            />
            <ColourCounter 
                colour="Green"
                onIncrease={() => dispatch({ colourToChange: 'green', amount: COLOUR_INCREMENT })} 
                onDecrease={() => dispatch({ colourToChange: 'green', amount: -1 * COLOUR_INCREMENT })}
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

export default SquareReducer;
