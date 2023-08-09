import React from 'react';
import {View, StyleSheet, useWindowDimensions, Text, Image, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PlusOrder from '../asset/plusOrder.png'
import ProsesImg1 from '../asset/proses1.png'
import ProsesImg2 from '../asset/proses2.png'

const FirstRoute = () => (
    <>
        <View style={[styles.container, {alignItems: 'center'}]}>
            <Image source={ProsesImg1}/>
            <View style={{ flexDirection: 'row', gap: 25 }}>
                <View>
                    <Text style={{ color: 'black' }}>Banana cupcake</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
                        <Image source={PlusOrder}/>
                        <Text style={{ color: 'black' }}>Cream and chesse</Text>
                    </View>
                    <Text style={{ color: 'black' }}>Rp. 12.000</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: '400', fontSize: 14 }}>View</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </>
);
  
const SecondRoute = () => (
    <>
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image source={ProsesImg1}/>
                <View>
                    <Text style={{ color: 'black' }}>Banana cupcake</Text>
                    <Text style={{ color: 'black' }}>Rp. 12.000</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: '400', fontSize: 14 }}>Review</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image source={ProsesImg2}/>
                <View>
                    <Text style={{ color: 'black' }}>Croissant strawbery</Text>
                    <Text style={{ color: 'black' }}>Rp 45.000/pax</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: '400', fontSize: 14 }}>Review</Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#0A191E',
        height: 4,
        borderRadius: 10
      }}
      style={{
        backgroundColor: 'white',
        width: '65%',
        elevation: 0,
        marginBottom: 48,
      }}
      renderLabel={({ route, focused}) => (
        <View style={{ flexDirection: 'row', width: 116 }}>
        <Text style={[{ color: focused ? 'black' : '#848484' }]}>
          {route.title}
        </Text>
        </View>
      )}

    />
);

const Shop = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'On process' },
      { key: 'second', title: 'History' },
    ]);
  
    return (
        <>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <Text style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 28
                }}>Favorite</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 28}}>
                <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </View>
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
        alignItems: 'center',
        marginBottom: 26
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 37
    },

    button: {
        backgroundColor: '#F29BBB',
        width: 76,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})

export default Shop;
