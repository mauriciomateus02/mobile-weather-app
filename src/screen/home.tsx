import React, { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text } from 'react-native';
import { Controller } from '../controllers/controller';
import { Local } from '../model/local';
import CardWeather from './components/Card';
import HeaderWeather from './components/Header';
import WeatherScreen from './components/Weather';
import InformationModal from './components/Informations';
import { Forecast, ForecastsBody } from './components/Forecasts';


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
        <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
            <Text>{data?.temp}</Text>
            <HeaderWeather text={data?.city_name}></HeaderWeather>
            <WeatherScreen temp={data?.temp} condiotion={data?.condition_slug} description={data?.description} max={data?.days[0].max} min={data?.days[0].min}></WeatherScreen>
            <InformationModal humidity={data?.humidity} rain_probability={data?.days[0].rain_probability} wind_speedy={data?.wind_speedy}></InformationModal>
            <CardWeather temp={data?.days[0].max} min={data?.days[0].min} date={''}><Text>123</Text></CardWeather>
            <ForecastsBody>{data?.days.map((element) => { return <Forecast weekday={element.weekday} condition={element.condition} max={element.max} min={element.min}></Forecast> })}</ForecastsBody>
        </ScrollView>
    )

}