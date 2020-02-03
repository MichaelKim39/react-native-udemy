// Custom reusable components can be made like so
// They must be placed in a separate folder called components   

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSrc, title, score }) => {
    // console.log(props)
    // Destructure highest level object when possible to clean up code
    return (
        <View>
            {/* Image primitive element takes source prop which requires a relative path to the image file */}
            <Image source={imageSrc}/>
            <Text>{title}</Text>
            <Text>Score - {score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageDetail;