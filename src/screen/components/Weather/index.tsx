import React from 'react';
import Container from '../Container';
import { Image, Text, View } from 'react-native';
import { styled } from './style';
import SunCloud from '../../../assets/SunCloudWeather.svg'
import Cloud from '../../../assets/cloud.svg'
import NightCloud from '../../../assets/Nightcloud.svg'
import Sun from '../../../assets/SunHappy.svg'
import Night from '../../../assets/Lua.svg'
import Rain from '../../../assets/cloudRain.svg'
type WeatherProps = {
    temp?: number;
    description?: string;
    condition?: string
    max?: number;
    min?: number;
    currently?: string;
}

const WeatherScreen = (props: WeatherProps) => {
    return (
        <Container style={{ width: '100%' }}>
            <View style={styled.viewWeather}>

                {(() => {
                    switch (props.condition) {
                        case 'cloudly_day':
                            return <SunCloud width={500} height={250} />

                            break;
                        case 'cloudly_night':
                            return <NightCloud width={500} height={300} style={styled.cloudlyNight} />

                            break;
                        case 'clear_day':
                            return <Sun width={500} height={250} />

                            break;
                        case 'clear_night':
                            return <Night width={400} height={250} />

                            break;
                        case 'rain':
                            return <Rain width={500} height={300} style={{ marginTop: '-10%', marginBottom: '-5%' }} />

                            break;
                        case 'cloud':
                            return <Cloud width={250} height={200} style={{ margin: '5%' }} />
                            break;
                        case 'fog':
                            return (props.currently != 'dia')?<NightCloud width={500} height={300} style={styled.cloudlyNight} /> : <SunCloud width={500} height={250} />
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