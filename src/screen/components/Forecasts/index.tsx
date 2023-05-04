import React from "react";
import Container from "../Container";
import { View, Text, ViewStyle } from "react-native";
import { styled } from "./style";
import Calendar from '../../../assets/calendar.svg';
import Rain from '../../../assets/rain.svg';
import Storm from '../../../assets/storm.svg';
import Sun from '../../../assets/sun.svg';
import Cloud from '../../../assets/Union.svg';
import SunCloud from '../../../assets/SoleNuvem.svg';
import Night from '../../../assets/night.svg';
import NightCloud from '../../../assets/NoiteNuvem.svg'
import LinearGradient from "react-native-linear-gradient";

type ForecastsProps = {
    weekday: string
    condition?: string
    max?: number
    min?: number
}
interface IContainerProps{

    children ?: React.ReactNode;
    style?: ViewStyle;


}

const ForecastsBody = (props: IContainerProps) => {
//esse card é onde os os climas dos dias posteriores estarão contidos 
    return (
        <Container style={[styled.body,props.style]}>
            <View style={styled.view}>
                <Text style={styled.text}>Next Forecast</Text>
                <Calendar width={25} height={25} style={styled.imagem}/>
            </View>
            {props.children}
        </Container>
    )
}
const Forecast = (props: ForecastsProps) => {
//esse componente é as previsões dos dias posteriores
    return (
        <Container style={styled.view}>
            {(() => {
                switch (props.weekday) {
                    case 'Seg':
                        return <Text style={styled.textWeekday}>Monday</Text>
                        break;
                    case 'Ter':
                        return <Text style={styled.textWeekday}>Tuesday</Text>
                        break;
                    case 'Qua':
                        return <Text style={styled.textWeekday}>Wednesday</Text>
                        break;
                    case 'Qui':
                        return <Text style={styled.textWeekday}>Thursday</Text>
                        break;
                    case 'Sex':
                        return <Text style={styled.textWeekday}>Friday</Text>
                        break;
                    case 'Sáb':
                        return <Text style={styled.textWeekday}>Saturday</Text>
                        break;
                    case 'Dom':
                        return <Text style={styled.textWeekday}>Sunday</Text>
                        break;
                    default:
                        return <Text style={styled.textWeekday}>ERROR</Text>
                        break;
                }
            })
                ()}
            {(() => {
                switch (props.condition) {
                    case 'rain':
                        return <Rain width={40} height={40} style={styled.imagemWeather}/>
                        break;
                    case 'storm':
                        return <Storm width={30} height={30} style={styled.imagemWeather}/>
                        break;
                    case 'clear_day':
                        return <Sun width={30} height={30} style={styled.imagemWeather}/>
                        break;
                    case 'clear_night':
                        return <Night width={30} height={30} style={styled.imagemWeather}/>
                        break;
                    case 'cloud':
                        return <Cloud width={30} height={30} style={styled.imagemWeather}/>
                        break;
                    case 'cloudly_day':
                        return <SunCloud width={30} height={30} style={styled.imagemWeather}/>
                        break;
                    case 'cloudly_night':
                        return <NightCloud width={30} height={30} style={styled.imagemWeather}/>
                        break;
                    default:
                        return <SunCloud width={30} height={30} style={styled.imagemWeather}/>
                        break;
                }
            })()}
            <View style={styled.viewText}>
                <Text style={styled.textTemp}>{props.max+'°c '}</Text>
                <Text style={styled.textTempMin}>{props.min+'°c'}</Text>
            </View>

        </Container>
    )

}

export { ForecastsBody, Forecast };