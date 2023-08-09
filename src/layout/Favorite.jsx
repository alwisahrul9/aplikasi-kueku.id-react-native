import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import SearchIcon from './../asset/searchIcon.png'
import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../component/ProductCard';

import { Product } from '../data/Product';

const Favorite = () => {
    return (
        <>
            <View style={styles.header}>
                <Text style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 28
                }}>Favorite</Text>
            </View>
            <View style={styles.searchBar}>
                <TextInput style={{ color: 'black', flex: 1, marginRight: 5 }} placeholder='Search' placeholderTextColor='#52575C'/>
                <Image source={SearchIcon} style={{ width: 21, height: 21 }}/>
            </View>
            <FlatGrid
                itemDimension={150}
                data={Product}
                horizontal={false}
                style={{ marginTop: 25 }}
                renderItem={({ item }) => (
                    <ProductCard
                        icon={item.icon}
                        title={item.title}
                        price={item.price}
                        widthcard={false}
                        widthIcon={false}
                    />
                )}
            />
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF82A6',
        height: 139,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: 363,
        height: 43,
        backgroundColor: 'white',
        position: 'absolute',
        top: 112,
        alignSelf: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CBE7FC',
        shadowColor: 'black',
        elevation: 20,
        zIndex: 1
    },
})

export default Favorite;
