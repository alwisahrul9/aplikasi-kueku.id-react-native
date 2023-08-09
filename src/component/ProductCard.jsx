import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ProductCard = ({ icon, title, price, widthCard, widthIcon }) => {
    return (
        <View style={[ widthCard ? styles.cardSizeDefault : styles.cardSizeAltenate ]}>
            <Image source={icon} style={[ widthIcon ? styles.iconSizeDefault : styles.iconSizeAltenate ]}/>
            <View style={styles.cardBody}>
                <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>{title}</Text>
                <Text style={styles.price}>Rp. {price}/pcs</Text>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardSizeDefault: {
        backgroundColor: 'white',
        borderWidth: .3,
        borderRadius: 8,
        width: 164
    },

    cardSizeAltenate: {
        backgroundColor: 'white',
        borderWidth: .3,
        borderRadius: 8
    },

    iconSizeDefault: {
        width: 164,
    },

    iconSizeAltenate: {
        width: '100%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        height: 100
    },

    cardBody: {
        padding: 10,
    },

    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700'
    },

    price: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400'
    },

    button: {
        paddingHorizontal: 2,
        width: 69,
        height: 30,
        backgroundColor: '#F29BBB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10
    }

})

export default ProductCard;
