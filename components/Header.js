import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

import Colors from "../constants/color";
import TitleText from "../components/TitleText";

const Header = props => {
    return (
        <View
            style={{
                ...styles.headerBase,
                ...Platform.select({
                    ios: styles.headerIos,
                    android: styles.headerAndroid
                })
            }}
        >
            <TitleText style={styles.title}>
                {props.title}
            </TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBase: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIos: {
        backgroundColor: 'white',
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
    },
    title: {
        color: Platform.OS === "ios" ? Colors.primary : 'white'
    }
});

export default Header;
