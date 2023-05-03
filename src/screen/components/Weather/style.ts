import React from "react";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    viewWeather: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'right',
        width: '100%',

    },
    viewCondition: {
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: -25,
    },
    title: {
        fontWeight: '500',
        color: 'white',
        fontSize: 64,
        marginLeft: '7%',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginLeft:'2%',

    },
    imagen: {
        width: 300,
        height: 250,
        

    },
    cloudlyNight: {
        // width: 340,
        // height: 250,
        marginBottom: '-8%',
        marginTop:'-5%'
       
    },
    cloud: {
        marginTop: 5,
        width: 315,
        height: 220,
        marginBottom: 10,
    }

})