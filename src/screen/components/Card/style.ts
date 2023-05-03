import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    view:{
        borderRadius:20,
        borderColor:'black',
        height: '100%',
        width:'100%',
        backgroundColor:'#011D43',
    },
    viewBody:{
        borderColor:'white',
        borderRadius: 25,
        height:'80%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    click:{
        width:'20%',
        height:'90%',
        borderColor: 'white',
        borderRadius: 10,
    },
    viewWeather:{
        borderRadius: 25,
        borderColor: 'black',
        height:'100%',
        width:'100%',
        //backgroundColor: '#006400',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    viewHeader:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10
    }

})

