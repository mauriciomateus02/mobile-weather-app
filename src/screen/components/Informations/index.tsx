import React from "react";
import Container from "../Container";
import { Text, View } from "react-native";
import { styled } from "./style";
import ProbabilyRain from '../../../assets/noun-rain.svg'
import Humidity from '../../../assets/noun-humidity.svg'
import WindSpeedy from '../../../assets/noun-wind.svg'

type InfromationsProps = {
    humidity: number;
    rain_probability: number;
    wind_speedy: string;
}
const InformationModal = (props: InfromationsProps) => {

    return (
        <Container style={{width: 343 }}>
            <View style={styled.body}>
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