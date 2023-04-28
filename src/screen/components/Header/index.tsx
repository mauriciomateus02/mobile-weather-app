import React from "react";
import { Text, View } from "react-native";
import Container from "../Container";
import { styled } from "./style";
import Notification from '../../../assets/notification.svg';
import Map from '../../../assets/Map.svg';
import Select from '../../../assets/Vector.svg';

type HeaderProps = {
    text: string;
}

const HeaderWeather = (props: HeaderProps) => {
    return (
        <Container style={{ width: '100%' }}>
            <View style={styled.viewHeader}>
                <View style={styled.viewMap}>
                    <Map height={30} width={30} style={styled.conponent} />
                    <Text style={styled.text}>{props.text}</Text>
                    <Select width={15} height={15} style={styled.conponent} />
                </View>
                <Notification width={30} height={30} />
            </View>
        </Container>
    )
}

export default HeaderWeather;