import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import ProfileIcon from './../asset/profile.png'
import ChartIcon from './../asset/chart.png'
import SearchIcon from './../asset/searchIcon.png'

const Header = () => {
    return (
        <>
            <View style={styles.backGround}>
            <View style={styles.profile}>
                <View style={styles.person}>
                    <Image source={ProfileIcon} style={{ width: 58, height: 58, marginRight: 9 }}/>
                <View>
                    <Text style={styles.personName}>Hi, Lisa</Text>
                    <Text style={styles.personGimmick}>What cake do you want today?</Text>
                </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image source={ChartIcon} style={{ width: 24, height: 24, marginRight: 9 }}/>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.backGroundAksen} />

            <View style={styles.searchBar}>
                <TextInput style={{ color: 'black', flex: 1, marginRight: 5 }} placeholder='Search' placeholderTextColor='#52575C'/>
                <Image source={SearchIcon} style={{ width: 21, height: 21 }}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    backGround: {
        backgroundColor: '#FF82A6',
        height: 123,
    },
    profile: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 17
    },
    person: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    personName: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white'
    },
    personGimmick: {
        fontSize: 12,
        color: 'white'
    },
    backGroundAksen: {
        backgroundColor: '#F4DEE9',
        height: 42,
        marginBottom: 19
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
        elevation: 20
    },
})

export default Header;
