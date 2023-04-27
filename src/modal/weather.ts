
export class Weather {

    private date: string
    private weekday: string
    private max: number
    private min: number
    private cloudiness: number
    private rain: number
    private rain_probability: number
    private wind_speedy: string
    private description: string
    private condition: string

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

    static fromJson(json: JSON) {
        return new Weather(
            json['results']['forecast']['date'],
            json['results']['forecast']['weekday'],
            json['results']['forecast']['max'],
            json['results']['forecast']['min'],
            json['results']['forecast']['cloudiness'],
            json['results']['forecast']['rain'],
            json['results']['forecast']['rain_probability'],
            json['results']['forecast']['wind_speedy'],
            json['results']['forecast']['description'],
            json['results']['forecast']['condition']

        )
    }

}