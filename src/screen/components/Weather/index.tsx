import React from 'react';
import Container from '../Container';
import { Image, Text, View } from 'react-native';
import { styled } from './style';
import SunClound from '../../../assets/Suncloud.svg'
import Nightcloud from '../../../assets/cloud.svg'
type WeatherProps = {
    temp: number;
    description: string;
    condiotion: string
    max: number;
    min: number;
}

const WeatherScreen = (props: WeatherProps) => {
    return (
        <Container style={{ width: '100%' }}>
            <View style={styled.viewWeather}>

                {(() => {
                    switch (props.condiotion) {
                        case 'cloudly_day':
                            return <Image source={require('../../../assets/Sun.png')} style={styled.imagen} />
                            break;
                        case 'cloudly_night':
                            //
                            return <Image source={require('../../../assets/Nightcloud.png')} style={styled.cloudlyNight} />
                            break;
                        case 'clear_day':
                            return <Image source={require('../../../assets/SunHappy.png')} style={styled.imagen} />
                            break;
                        case 'clear_night':
                            return <Image source={require('../../../assets/Lua.png')} style={styled.imagen} />
                            break;
                        case 'rain':
                            return <Image source={require('../../../assets/cloud_rain.png')} style={styled.imagen, { marginTop: '-10%' }} />
                            break;
                        case 'cloud':
                            return <Nightcloud width={250} height={200} />
                            break;
                        default:
                            return <Text style={styled.text}>erro ao obter clima</Text>
                            break;
                    }
                })
                    ()}
                <View style={styled.viewCondition}>
                    <Text style={styled.title}>{props.temp + '°'}</Text>
                    <Text style={styled.text}>{props.description}</Text>
                    <Text style={styled.text}>{'Max.: ' + props.max + '°' + ' ' + 'Min.: ' + props.min + '°'}</Text>
                </View>
            </View>
        </Container>
    )
}
export default WeatherScreen;