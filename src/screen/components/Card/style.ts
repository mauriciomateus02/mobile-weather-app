import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    view:{
        borderRadius:20,
        borderColor:'black',
        height: '100%',
        width:'100%',
        backgroundColor:'#6A5ACD',
        //flexDirection:'row',
        //justifyContent:'space-around'
    },
    viewBody:{
        borderColor:'white',
        borderRadius: 20,
        height:'80%',
        width:'100%',
       // backgroundColor: '#FF4500',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    viewWeather:{
        borderRadius: 20,
        borderColor: 'black',
        height:'100%',
        width:'20%',
        //backgroundColor: '#006400',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    viewHeader:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom: 5
    }

})

