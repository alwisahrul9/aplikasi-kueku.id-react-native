import React from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import { useState } from 'react';

import Header from '../component/Header';
import CategoryCard from '../component/CategoryCard';
import SlideImages from '../component/SlideImages';
import ProductCard from '../component/ProductCard';

import { Data } from '../data/Data'
import { Product } from '../data/Product';
import Slide1 from '../asset/slide1.png'
import Slide2 from '../asset/slide2.png'
import Slide3 from '../asset/slide3.png'

const Home = ({ navigation }) => {

    const [imgActive, setImageActive] = useState(0)
    const screenWidth = Dimensions.get('window').width

    const SlideItems = [Slide1, Slide2, Slide3]

    const onSlide = (event) => {
        const slide = event.nativeEvent.contentOffset.x
        const index = slide / screenWidth
        setImageActive(index)
        console.log(index)
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />

                <View style={{ paddingHorizontal: 14 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CategoryCard title="All" icon=''/>
                        {
                            Data.map((item, index) => 
                                <CategoryCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    onPress={() => navigation.navigate('MoreProduct', {
                                        data:item.produk,
                                        title:item.title
                                    })}
                                />
                            )
                        }
                    </ScrollView>

                    <View style={{
                        justifyContent: 'space-between',
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 21,
                        marginBottom: 18
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: '#343434'
                        }}>Today's promo</Text>

                        <Text style={{
                            fontSize: 14,
                            fontWeight: 400,
                            color: '#EE2772'
                        }}>See all</Text>
                    </View>

                    <View>
                        <ScrollView
                            onScroll={onSlide}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            horizontal={true}
                        >
                            {
                                SlideItems.map(
                                    ( item, i ) => <SlideImages key={i} item={item}/>
                                )
                            }
                        </ScrollView>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {
                                SlideItems.map(
                                    (items, i) => <View key={i} style={imgActive === i ? styles.dotActive : styles.dotSlide}/>
                                )
                            }
                        </View>

                        <View style={{ marginBottom: 25 }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 18,
                                fontWeight: '600',
                                marginBottom: 15
                            }}>Recommendation for you</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    gap: 10
                                }}>
                                    {
                                        Product.map((item, index) => <ProductCard key={index}
                                        icon={item.icon}
                                        title={item.title}
                                        price={item.price}
                                        widthCard={true}
                                        widthIcon={true}/>)
                                    }
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    dotSlide: {
        width: 7,
        height: 7,
        backgroundColor: '#C4C4C4',
        borderRadius: 7/2,
        marginHorizontal: 5,
        marginBottom: 13,
        marginTop: 20
    },
    dotActive: {
        width: 7,
        height: 7,
        borderRadius: 7/2,
        marginHorizontal: 5,
        marginBottom: 13,
        marginTop: 20,
        backgroundColor: '#4798D3'
    }
})

export default Home;
