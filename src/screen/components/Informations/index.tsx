import React from "react";
import Container from "../Container";
import { Text, View, ViewStyle } from "react-native";
import { styled } from "./style";
import ProbabilyRain from '../../../assets/noun-rain.svg'
import Humidity from '../../../assets/noun-humidity.svg'
import WindSpeedy from '../../../assets/noun-wind.svg'

type InfromationsProps = {
    humidity?: number;
    rain_probability?: number;
    wind_speedy?: string;
    style?: ViewStyle; 
}
const InformationModal = (props: InfromationsProps) => {
    //esse componente é as informações de humidade, vento e possibilidade de chuva
    return (
        <Container style={{width: 343, marginBottom:-10}}>
            <View style={[styled.body,props.style]}>
                <View style={styled.Statistic}>
                    <ProbabilyRain width={30} height={30} style={styled.image}/>
                    <Text style={styled.text}>{props.rain_probability+'%'}</Text>
                </View>
                <View style={styled.Statistic}>
                    <Humidity  width={30} height={30} style={styled.image}/>
                    <Text style={styled.textTemp}>{props.humidity+'%'}</Text>
                </View>
                <View style={styled.Statistic}>
                    <WindSpeedy  width={30} height={30} style={styled.image}/>
                    <Text style={styled.text}>{props.wind_speedy}</Text>
                </View>
            </View>
        </Container>
    )

}
export default InformationModal