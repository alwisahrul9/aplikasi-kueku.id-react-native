import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const CategoryCard = ({title, icon, onPress}) => {
    
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    {
                        icon === '' ? '' : <Image source={icon} style={{ width: 35, height: 35, marginVertical: 5 }}/>
                    }
                    <Text style={{ color: 'black', fontSize: 14, fontFamily: 'AbhayaLibre-Bold' }}>{title}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 73,
        height: 70,
        backgroundColor: '#F1F2F6',
        borderRadius: 16,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryCard;
