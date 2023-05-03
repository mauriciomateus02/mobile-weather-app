import { Colors } from "react-native/Libraries/NewAppScreen";
import { Weather } from "./weather"

export class Local {

   temp: number;
   date: string;
   time: string;
   city: string;
   humidity: number;
   cloudiness: number;
   rain: number;
   wind_speedy: string;
   wind_direction: number;
   sunrise: string;
   sunset: string;
   condition_slug: string;
   city_name: string;
   days: Array<Weather>;
   currently: string;
   description: string;
   colors: Array<string>;

    constructor(temp: number, date: string, time: string, city: string, humidity: number, cloudiness: number,
        rain: number, wind_speedy: string, wind_direction: number, sunrise: string, sunset: string, condition_slug: string,
        city_name: string, days:Array<Weather>, currently:string, description: string) {
        this.temp = temp;
        this.date = date;
        this.time = time;
        this.city = city;
        this.humidity = humidity;
        this.cloudiness = cloudiness;
        this.rain = rain;
        this.wind_speedy = wind_speedy;
        this.wind_direction = wind_direction;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.condition_slug = condition_slug;
        this.city_name = city_name;
        this.days = days;
        this.currently = currently;
        this.description = description;

    }

    static fromJson(json:any){
        return new Local(
            json['results']['temp'],
            json['results']['date'],
            json['results']['time'],
            json['results']['city'],
            json['results']['humidity'],
            json['results']['cloudiness'],
            json['results']['rain'],
            json['results']['wind_speedy'],
            json['results']['wind_direction'],
            json['results']['sunrise'],
            json['results']['sunset'],
            json['results']['condition_slug'],
            json['results']['city_name'],
            json['results']['forecast'].map((element: any)=> Weather.fromJson(element)),
            json['results']['currently'],
            json['results']['description'],
        )
    }

}