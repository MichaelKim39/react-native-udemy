import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    // Must add keys for items in lists 
    // Defined behaviour without keys for removal = remove entire list an re-load all elements
    // Key provides mapping between item in code and item on display
    // Key must be a string, must be consistent value, must be unique
    // Can either add in key values to array directly or use key extractor
    // Key extractor defines keys at runtime, adding directly defines them beforehand
    const friends = [
        { name: 'Friend1'},
        { name: 'Friend2'},
        { name: 'Friend3'},
        { name: 'Friend4'},
        { name: 'Friend5'},
        { name: 'Friend6'},
        { name: 'Friend7'},
        { name: 'Friend8'},
        { name: 'Friend9'},
    ]

    // FlatList element requires two props, data (object array in this case) and renderItem (Function called for each array element)
    // Add parentheses to return statement to make JSX easier to read (multiline)
    // Just adding horizontal = add horizontal prop (horizontal scroll = true)
    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                // element === { item: {name: friend1}, index: 0}
                // instead write out { item } to get direct reference
                // item === { name: friend1 } (Destructuring)
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        fontSize: 30
    }
});

export default ListScreen;