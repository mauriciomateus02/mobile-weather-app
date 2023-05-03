import React from "react";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({

    body: {
        backgroundColor: '#011D43',
        borderColor: 'white',
        borderRadius: 20,
        width: '100%',
        height: '50%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 35,
        padding:12,
    },
    Statistic: {
        flexDirection: 'row',
        marginRight:2,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: '500',
        marginLeft: 2,
    },
    textTemp: {
        color: 'white',
        fontWeight: '500',
        marginLeft: -2,
    },
    image: {
        marginLeft: 5
    }
})