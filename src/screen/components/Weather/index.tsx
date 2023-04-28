import React from 'react';
import Container from '../Container';
import { Image, Text, View } from 'react-native';
import { styled } from './style';
import SunClound from '../../../assets/Suncloud.svg'

type WeatherProps = {
    temp: number;
    description: string;
    condiotion: string
    max: number;
    min: number;
}

const WeatherScreen = (props: WeatherProps) => {
    return (
        <Container>
            <View style={styled.viewWeather}>

                {(() => {
                    switch (props.condiotion) {
                        case 'cloudly_day':
                            //return <SunClound width={284} height={207}style={{alignSelf:'center', marginLeft:'10%'}}/>
                            return <Image source={require('../../../assets/Sun.png')} style={styled.imagen} />
                            break;
                        case 'clear_day':
                            return <Text style={styled.text}>cloudly_day</Text>
                            break;
                        case 'rain':
                            return <Image source={require('../../../assets/cloud_rain.png')} style={styled.imagen, { marginTop: '-10%' }} />
                            break;
                        case 'cloud':
                            return <Text style={styled.text}>cloudly_day</Text>
                            break;
                        default:
                            return <Text style={styled.text}>cloudly_day</Text>
                            break;
                    }
                })
                    ()}
                <View style={styled.viewCondition}>
                    <Text style={styled.title}>{props.temp +'°'}</Text>
                    <Text style={styled.text}>{props.description}</Text>
                    <Text style={styled.text}>{'Max.: ' + props.max + '°' + ' ' + 'Min.: ' + props.min + '°'}</Text>
                </View>
            </View>
        </Container>
    )
}
export default WeatherScreen;