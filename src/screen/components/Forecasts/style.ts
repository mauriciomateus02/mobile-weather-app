import React from "react";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    body: {
        borderRadius: 20,
        width: 343,
        marginBottom:20,

    },
    view: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10

    },
    imagem: {
        marginRight: 20,
    },
    imagemWeather:{
        alignSelf:'center',
        marginLeft:-20
    },
    viewText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
        fontSize: 18,
    },
    textWeekday:{
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,
        fontSize: 15,
        width:'25%',
    },
    textTemp: {
        fontWeight: '400',
        color: 'white',
        fontSize: 15,
    },
    textTempMin: {
        color: '#D3D3D3',
        fontSize: 14,
    }
})