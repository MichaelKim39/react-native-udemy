import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

// Recall: pull required properties off props object to simplify code
const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{colour}</Text>
            {/* String interpolation / templating required to inject colour variable into a string */}
            <Button title={`More ${colour}`} onPress={() => {onIncrease()}}/>
            <Button title={`Less ${colour}`} onPress={() => {onDecrease()}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColourCounter;

