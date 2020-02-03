import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

const Exercise1 = () => {

    const friends = [
        {name: 'Michael', age: '18'},
        {name: 'Kimmel', age: '20'},
    ]
    
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
            return <Text style={styles.friendStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    friendStyle: {
        fontSize: 20,
        marginVertical: 20
    }
});

export default Exercise1;