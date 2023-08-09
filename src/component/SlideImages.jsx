import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const SlideImage = ({item}) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <Image source={item} style={{ height: 168, width: windowWidth - 28, borderRadius: 10}}/>
    );
}

const styles = StyleSheet.create({})

export default SlideImage;
