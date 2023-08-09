import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import ProfileIcon from './../asset/profile.png'
import EditIcon from './../asset/editIcon.png'
import VoucherIcon from './../asset/voucherIcon.png'
import PointIcon from './../asset/pointIcon.png'
import LogoutIcon from './../asset/logoutIcon.png'

const Profile = () => {
    return (
        <>
            <View style={styles.header}>
                <Image source={LogoutIcon} style={{
                    position: 'absolute',
                    right: 25.72,
                }}/>
                <Text style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 28
                    }}>Profile</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.card}>
                    <Image source={ProfileIcon} style={{ width: 112, height: 112 }}/>
                    <View>
                        <Image source={EditIcon} style={{
                            position: 'absolute',
                            right: -20,
                            top: 0
                        }}/>
                        <Text style={{
                            color: 'black',
                            fontSize: 22,
                            fontWeight: '700',
                            marginTop: 25
                        }}>Lisa Angel</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        gap: 70,
                        marginTop: 44
                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{
                                backgroundColor: '#ED517D',
                                paddingVertical: 20,
                                paddingHorizontal: 21,
                                borderRadius: 30
                            }}>
                                <Image source={VoucherIcon} />
                            </View>
                            <Text style={{ 
                                marginTop: 14,
                                color: 'black',
                                fontSize: 18,
                                fontWeight: '600'
                             }}>Voucher</Text>
                        </View>
                        
                        <View style={{ alignItems: 'center' }}>
                            <View style={{
                                backgroundColor: '#ED517D',
                                paddingVertical: 20,
                                paddingHorizontal: 21,
                                borderRadius: 30
                            }}>
                                <Image source={PointIcon} />
                            </View>
                            <Text style={{ 
                                marginTop: 14,
                                color: 'black',
                                fontSize: 18,
                                fontWeight: '600'
                             }}>Point</Text>
                        </View>
                    </View>
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
        alignItems: 'center'
    },

    body: {
        paddingHorizontal: 16
    },

    card: {
        borderWidth: 1,
        borderColor: '#ED517D',
        height: 550,
        borderRadius: 8,
        marginVertical: 42,
        elevation: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 14
    }
    
})

export default Profile;
