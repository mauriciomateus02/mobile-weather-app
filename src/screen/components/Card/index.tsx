import React from "react";
import Container from "../Container";
import { Pressable, Text, View, ViewStyle} from "react-native";
import { styled } from "./style";
import Clound from '../../../assets/Union.svg';
import SunClound from '../../../assets/SoleNuvem.svg';
import NightClound from '../../../assets/NoiteNuvem.svg';
import { conversor } from "../../../model/conversor";



type CardProps = {
    condition?: string;
    date?: string;
    temp?: number;
    min?: number;
    style?: ViewStyle;


};

const CardWeather = (props: CardProps) => {
    
    const [state, setState] = React.useState<Number>();

    return (
        //esse é card para os climas do dia atual, foram feitos de forma estatica por não existir retorno dessas informações
        <Container style={{ height: 220, width: 343, marginBottom: 30 }}>
            <View style={[styled.view, props.style]}>
                <View style={styled.viewHeader}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: 'white' }}>Today</Text>
                    <Text style={{ fontSize: 15, marginRight: 10, marginTop: 3, fontWeight: '500', color: 'white' }}>{conversor(props.date)}</Text>
                </View>

                <View style={styled.viewBody}>
                    <Pressable style={[styled.click, { borderWidth: (state == 1) ? 0.5 : 0 }]} onPress={() => { (state != 1) ? setState(1) : setState(0); }}>
                        <View style={styled.viewWeather}>
                            <Text style={{color: 'white'}}>{props.temp - 1 + '°C'}</Text>
                            <SunClound height={'60%'} width={'60%'} />
                            <Text style={{color: 'white'}}>15:00</Text>
                        </View>
                    </Pressable>

                    <Pressable style={[styled.click, { borderWidth: (state == 2) ? 0.5 : 0 }]} onPress={() => { (state != 2) ? setState(2) : setState(0); }}>
                        <View style={styled.viewWeather}>
                            <Text style={{color: 'white'}}>{props.temp - 2 + '°C'}</Text>
                            <SunClound height={'60%'} width={'60%'} />
                            <Text style={{color: 'white'}}>16:00</Text>
                        </View>
                    </Pressable>

                    <Pressable style={[styled.click, { borderWidth: (state == 3) ? 0.5 : 0}]} onPress={()=>{(state != 3)?setState(3) : setState(0)}}>
                        <View style={styled.viewWeather}>
                            <Text style={{color: 'white'}}>{props.temp - 4 + '°C'}</Text>
                            <Clound height={'60%'} width={'60%'} />
                            <Text style={{color: 'white'}}>17:00</Text>
                        </View>
                    </Pressable>

                    <Pressable style={[styled.click,{ borderWidth: (state == 4) ? 0.5 : 0}]} onPress={()=>{(state != 4)?setState(4) : setState(0)}}>
                        <View style={styled.viewWeather}>
                            <Text style={{color: 'white'}}>{props.min + 3 + '°C'}</Text>
                            <NightClound height={'60%'} width={'60%'} />
                            <Text style={{color: 'white'}}>18:00</Text>
                        </View>
                    </Pressable>

                </View>

            </View>
        </Container>
    )
}

export default CardWeather;