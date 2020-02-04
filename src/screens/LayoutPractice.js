import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LayoutPractice = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 3,
        height: 200,
    },
    box1: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    box3: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    },
    box2: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        marginTop: 50
    },
});

export default LayoutPractice;