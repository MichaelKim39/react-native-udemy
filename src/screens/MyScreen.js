import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MyScreen = () => {
    const myName = <Text style={styles.headerStyle}>Michael Kim</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.textStyle}>My name is Michael Kim!</Text>
            {myName}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    headerStyle: {
        fontSize: 50
    }
});

export default MyScreen;