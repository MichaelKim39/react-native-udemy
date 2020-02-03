import React from 'react'; 
// React library containts code for components to work together
import { Text, StyleSheet, View } from 'react-native'; 
// React Native library contains code to display the actual content from components
// Curly braces for selective imports

// Text is example of primitive react element
// Come from the react native library and allow display of some common components
// Other examples are Image, Button, View

// HTML looking stuff = JSX
// Technically not valid javascript
// The nativescript bundler uses a program called "babel" to translate it into javascript
// Why use JSX = makes life easier

// JSX elements can be nested inside each other like HTML
const ComponentsScreen = () => {
    const greeting = "Sup bro...";
    const stuffArray = ["My", "Guy", "How's", "It", "Hanging?"];
    const whaddup = <Text>Alright Mate?</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This the components screen boi</Text>
            <Text>{greeting}</Text>
            <Text>{stuffArray}</Text>
            {whaddup}
        </View>
    );
};
// Leaving semicolons causes bundler to think we're trying to display text... leads to erros
// Can configure JSX elements on the fly using props
// We can refer to JS variables by referencing them in curly braces (Like angular binding)
// This reference works for strings, numbers, arrays etc.
// EXCEPTION: Cannot try to display JS objects such as { color : red } inside of a text element

// Can also assign variables to JSX elements and display them by variable that way
// Correct format for component return statements: use the normal brackets, or place first tag after return

// Alternatively can use keyword function instead of arrow function
// function() instead of () => 

// React involves components which involve some stuff called JSX which looks like HTML
// A StyleSheet is just like that in a browser - adds style to components
// There are other ways to apply styles other than style sheets
// Technically can pass a JS style object directly into a JSX element e.g. style = {{ fontSize: 30 }}
// Advantages and disadvantages for inline and stylesheet styling - generally stylesheet better for error checking etc.
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

// Need to export the component we just created to actually display it
export default ComponentsScreen;