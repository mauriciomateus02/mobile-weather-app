import React from "react";
import Container from "../Container";
import { Dimensions, Image, StyleProp, Text, View, ViewStyle } from "react-native";
import { styled } from "./style";
import Clound from '../../../assets/Union.svg'
import SunClound from '../../../assets/SoleNuvem.svg'
import NightClound from '../../../assets/NoiteNuvem.svg'
type CardProps = {
    title?: string;
    date?: string;
    temp: number;
    min: number;
    time?: number;

};

const windowsHeight = Dimensions.get('window').height
const windowsWidth = Dimensions.get('window').width

const CardWeather = (props: CardProps) => {
    return (
        <Container style={{ backgroundColor: 'white', height: 217, width: 343 }}>
            <View style={styled.view}>
                <View style={styled.viewHeader}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 5 }}>Today</Text>
                    <Text style={{ fontSize: 15, marginRight: 10, marginTop: 3 }}>{props.date}24,Apr</Text>
                </View>
                <View style={styled.viewBody}>
                    <View style={styled.viewWeather}>
                        <Text>{props.temp - 1 + '°C'}</Text>
                        <SunClound height={'60%'} width={'60%'} />
                        <Text>15:00</Text>
                    </View>
                    <View style={styled.viewWeather}>
                        <Text>{props.temp - 2 + '°C'}</Text>
                        <SunClound height={'60%'} width={'60%'} />
                        <Text>16:00</Text>
                    </View>
                    <View style={styled.viewWeather}>
                        <Text>{props.temp - 3 + '°C'}</Text>
                        <Clound height={'60%'} width={'60%'} />
                        <Text>17:00</Text>
                    </View>
                    <View style={styled.viewWeather}>
                        <Text>{props.min + '°C'}</Text>
                        <NightClound height={'60%'} width={'60%'} />
                        <Text>18:00</Text>
                    </View>
                </View>

            </View>
        </Container>
    )
}
export default CardWeather;