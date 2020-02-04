import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Three models for laying out elements in the page
// Box object model, flex box model, positioning model
// Content surrounded by padding, border and margin respectively
const BoxScreen =  () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Child1</Text>
            <Text style={styles.text2Style}>Child2</Text>
            <Text style={styles.text3Style}>Child3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // JUSTIFY CONTENT, FLEX DIRECTION, ALIGN ITEMS - PARENT PROPERTIES
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
            // Align items is a parent property by default stretch
            // Other options are flex-start, center, flex-end
        // flexDirection: 'row',
            // Flex direction by default column
            // Align items varies depending on flex direction
        height: 200,
        // justifyContent: 'space-between'
            // Justify content operates in same direction as flex direction
            // Justify content defines an axis from which to distribute children
            // By default content justified around flex start. Can also be flex end, space between, space around, center
    },
    // FLEX, ALIGN SELF - CHILDREN PROPERTIES
    text1Style: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 3, 
            // flex determines how much space children take up inside the parent
            // flex 1 on a single child takes up the most space as possible
            // flex 1 on two children greedy share space as much as they can
            // flex 1 on all children greedy share space equally
            // Can distribute flex values across children
                // Add up flex values, each child gets flex/total % share of parent space
            // NB: flex operates in same direction as flex direction

        // margin: 20,
            // Shortcut properties; Margin vertical = apply to both top and bottom
            // Just margin applies to all sides
        position: 'absolute',
            // Absolute positioning causes the child to be ignored by its sibling elements
            // Asbolute positioned children agree some (not all) parent properties
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
            // top, bottom, left, right
            // Adds spacing by some amount translating the element by some amount of shift
            // In this way a child may appear to leave its parent container
            // SECRET TRICK: Set position to absolute + TBLR to 0 to get a child to fill the screen
                // 0 distance between all sides of parent
                // This is so common react gave us a way to do it easily
                // ... means copy the properties into the element
        ...StyleSheet.absoluteFillObject,
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 4,
        // alignSelf: 'flex-end',
            // alignSelf just ovverrides alignitems from the parent
    },
    text3Style: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 3
    }
});

export default BoxScreen;

// Order of property application
// Box object model rules first
// Flex box rules next
// Top Bottom Left and Right last