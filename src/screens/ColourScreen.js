import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColourScreen = () => {
    const [colours, setColours] = useState([]);
    console.log(colours);

    return (
        <View>
            <Button title="Add Random Colour" onPress={() => {
                // Don't want to directly modify state variable!
                // Can't do something like colours.push
                // Instead initialise a brand new array (using ... operator to copy old contents)
                // NB: Remember everytime state variable is changed the entire component function is re-run
                setColours([...colours, randomRgb()])
            }}/>
            
            <FlatList 
                //NB: Only need destructuring for array elements for renderItem! For keyExtractor element received as normal
                keyExtractor={item => item}
                data={colours}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }}/>
                }}
            />
        </View>      
    );  
};

// Helper function to produce random rgb strings
const randomRgb = ()  => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256); 
    // Return template string using backticks
    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColourScreen;