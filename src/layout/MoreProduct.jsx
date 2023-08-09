import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Header from '../component/Header';
import CategoryCard from '../component/CategoryCard';

import { Data } from '../data/Data'
import ProductCard from '../component/ProductCard';
import { FlatGrid } from 'react-native-super-grid';

const MoreProduct = ({ navigation, route }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(route.params.data)
    }, [])

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header />
            <View style={{ paddingHorizontal: 14 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <CategoryCard title="All" icon='' onPress={() => navigation.navigate('Home')}/>
                    {
                        Data.map((item, index) => 
                            <CategoryCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                onPress={() => navigation.push('MoreProduct', {
                                    data:item.produk,
                                    title:item.title
                                })}
                            />
                        )
                    }
                </ScrollView>
                <Text style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '600',
                    marginTop: 25,
                    marginBottom: 10,
                }}>Best { route.params.title } for you</Text>
            </View>

            <FlatGrid
                itemDimension={150}
                data={data}
                style={{
                    marginHorizontal: 10,
                    backgroundColor: '#F4DEE9',
                    borderRadius: 8
                }}
                renderItem={({ item }) => (
                    <ProductCard
                        icon={item.image_produk}
                        title={item.nama}
                        price={item.harga}
                        widthcard={false}
                        widthIcon={false}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default MoreProduct;
