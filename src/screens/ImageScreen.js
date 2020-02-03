import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
// import child components if required

const ImageScreen = () => (
  <View>
    <Text>Image Screen</Text>
    {/*
    Self Closing tag as we don't expect to pass anything into the component
    Pass prop from parent to child component (Can name anything, just need to receive in child file)
    */}
    <ImageDetail
      title="Hidden Leaf Village"
      imageSrc={require('../../assets/forest.jpg')}
      score={1}
    />
    <ImageDetail
      title="Bamboo Forest"
      imageSrc={require('../../assets/beach.jpg')}
      score={2}
    />
    <ImageDetail
      title="Lost City of Atlanta"
      imageSrc={require('../../assets/mountain.jpg')}
      score={3}
    />
  </View>
);

const styles = StyleSheet.create({

});

export default ImageScreen;
