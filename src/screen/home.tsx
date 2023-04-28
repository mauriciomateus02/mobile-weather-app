import React, { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text } from 'react-native';
import { Controller } from '../controllers/controller';
import { UrlApi } from '../repositories/url';
import { Weather } from '../model/weather';
import { Local } from '../model/local';
import CardWeather from './components/Card';
import Container from './components/Container';
import Svg, { SvgUri } from 'react-native-svg';
import Nuvem from '../assets/Union.svg'
import Header from './components/Header';
import HeaderWeather from './components/Header';
import WeatherScreen from './components/Weather';
import InformationModal from './components/Informations';


export default function sky() {

    const [data, setData] = useState<Local>();
    const contro = new Controller();
    useEffect(() => {
        const get = async () => {
            const result = await contro.getAll();
            console.log(result);
            setData((result as Local));
        }

        get();
    }, [])

    return (
        <ScrollView style={{backgroundColor:'black', flex:1}}>
            <Text>{data?.temp}</Text>
            <HeaderWeather text={data?.city_name}></HeaderWeather>
            <WeatherScreen temp={20} condiotion='cloudly_day' description='dia nublado' max={15} min={12}></WeatherScreen>
            <InformationModal humidity={2} rain_probability={2} wind_speedy='25 km/h'></InformationModal>
            <CardWeather temp={data?.days[0].max} min={data?.days[0].min} date={''}><Text>123</Text></CardWeather>
            <Nuvem width={200} height={200}/>
        </ScrollView>
    )

}