import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// NB: Self closing tags can be used for JSX elements when there are no children!
// Text input has zero styling by default 
// Text input frequently needs three props: style, autoCapitalize, autoCorrect
// Recall that JSX requires curly braces to reference any values other than strings from JS
// Recall that state in react is required to track any variable that changes over time so that the component can re-render (and be displayed)
// In react we never want a parent to read the state of a child directly 
const TextScreen = () => {
    // Destructure useState (state variable, setter)
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            <Text>My Password is: {password}</Text>
            {password.length <= 5 ? <Text>Password must be longer than 5 characters!</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;