
export class Weather {

     date: string
     weekday: string
     max: number
     min: number
     cloudiness: number
     rain: number
     rain_probability: number
     wind_speedy: string
     description: string
     condition: string

    constructor(date: string, weekday: string, max: number, min: number, cloudiness: number, rain: number, rain_probability: number,
        wind_speedy: string, description: string, condition: string) {
        this.date = date;
        this.weekday = weekday
        this.max = max
        this.min = min
        this.cloudiness = cloudiness
        this.rain = rain
        this.rain_probability = rain_probability
        this.wind_speedy = wind_speedy
        this.description = description
        this.condition = condition
    }

    static fromJson(json: any) {
        return new Weather(
            json['date'],
            json['weekday'],
            json['max'],
            json['min'],
            json['cloudiness'],
            json['rain'],
            json['rain_probability'],
            json['wind_speedy'],
            json['description'],
            json['condition']
        )
    }

}