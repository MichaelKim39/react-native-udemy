import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15;

// Define reducer function outside of component - confuses state argument with state object from useReducer call
// By convention second argument called "action" - describes how to change state object
const reducer = (state, action) => {
    // state == { red: num, blue: num, green: num}
    // BUY CONVENTION action has format {type: type of action, payload: data critical to change}
    // action == { type: 'change_red' || 'change_green' || 'change_blue', payload: +15, -15}
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state 
                : {...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
                ? state 
                : {...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state 
                : {...state, blue: state.blue + action.payload };
        default:
            return state;
            // NB reducer function must always return a state object
    }
};
// When reducer eventually returns something, react automatically re-renders the main component
// React will provide us the returned object from the reducer as first object of useReducer() call after the re-render

const ReducerConvention = () => {

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
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOUR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOUR_INCREMENT })}
            />
            <ColourCounter 
                colour="Blue"
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOUR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOUR_INCREMENT })}
            />
            <ColourCounter 
                colour="Green"
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOUR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOUR_INCREMENT })}
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

export default ReducerConvention;
