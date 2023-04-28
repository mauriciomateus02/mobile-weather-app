import React from "react";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    viewWeather:{
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        textAlign:'right'
    },
    viewCondition:{
         justifyContent:'space-between',
         alignItems:'center',
         textAlign:'center',
         marginTop:-35,
    },
    title:{
        fontWeight:'500',
        color: 'white',
        fontSize:64,
        marginLeft:'8%',
    },
    text:{
        color: 'white',
        fontSize: 18,

    },
    imagen:{
        width: 300, 
        height:250,
         
    }

})