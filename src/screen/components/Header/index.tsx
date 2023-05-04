import React from "react";
import { Text, View } from "react-native";
import Container from "../Container";
import { styled } from "./style";
import Notification from '../../../assets/notification.svg';
import Map from '../../../assets/Map.svg';
import Select from '../../../assets/Vector.svg';

type HeaderProps = {
    text?: string;
}
// esse componente é a exibição do local da verificação do clima.
const HeaderWeather = (props: HeaderProps) => {
    return (
        <Container style={{ width: '100%' }}>
                <View style={styled.viewHeader}>
                    <View style={styled.viewMap}>
                        {/*imagem de map*/}
                        <Map height={40} width={30} style={styled.conponent} />
                        {/*nome da cidade*/}
                        <Text style={styled.text}>{props.text}</Text>
                        {/*nome da botão de notificação*/}
                        <Select width={15} height={15} style={styled.conponent} />
                    </View>
                    <Notification width={40} height={30} />
                </View>
        </Container>
    )
}

export default HeaderWeather;