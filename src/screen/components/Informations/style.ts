import React from "react";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({

    body: {
        backgroundColor: '#808000',
        borderColor: 'white',
        borderRadius: 20,
        width: '90%',
        height: '70%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
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