import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, Text } from 'react-native';
import { Controller } from '../../controllers/controller';
import { Local } from '../../model/local';
import CardWeather from '../components/Card';
import HeaderWeather from '../components/Header';
import WeatherScreen from '../components/Weather';
import InformationModal from '../components/Informations';
import { Forecast, ForecastsBody } from '../components/Forecasts';
import { conversorColor, conversorColorContainer } from '../../model/conversor';

import { Weather } from '../../model/weather';
import LinearGradient from 'react-native-linear-gradient';


export default function sky() {

    const [data, setData] = useState<Local>();
    const contro = new Controller();

    useEffect(() => {
        const get = async () => {
            const result = await contro.getAll();
            setData((result as Local));
        }

        get();
    }, [])

    return (


        <LinearGradient colors={conversorColor(data?.condition_slug, data?.currently)} style={{ flex: 1 }}>
            {
                (data !== undefined) ?
                    <ScrollView >
                        <HeaderWeather text={data?.city_name}></HeaderWeather>
                        <WeatherScreen temp={data?.temp} condition={data?.condition_slug} currently={data?.currently} description={data?.description} max={data?.days[0].max} min={data?.days[0].min}></WeatherScreen>
                        <InformationModal style={{ backgroundColor: conversorColorContainer(data?.condition_slug, data?.currently) }} humidity={data?.humidity} rain_probability={data?.days[0].rain_probability} wind_speedy={data?.wind_speedy}></InformationModal>
                        <CardWeather style={{ backgroundColor: conversorColorContainer(data?.condition_slug, data?.currently) }} temp={data?.days[0].max} min={data?.days[0].min} date={data?.date}></CardWeather>
                        <ForecastsBody style={{ backgroundColor: conversorColorContainer(data?.condition_slug, data?.currently) }}>{data?.days.map((element: Weather, index: number) => { return <Forecast weekday={element.weekday} condition={element.condition} max={element.max} min={element.min} key={index}></Forecast> })}</ForecastsBody>
                    </ScrollView>

                    : 
                    <ActivityIndicator size="large" color='white' style={{alignSelf:'center',marginTop:'70%'}}/>
            }

        </LinearGradient>
    )

}