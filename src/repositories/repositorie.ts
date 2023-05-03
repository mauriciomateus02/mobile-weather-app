import { Local } from "../model/local";
import { Weather } from "../model/weather";
import { UrlApi } from "./url";


export class Repositorie {
    async getTudo() {
        try {
            const url = String(UrlApi)
            const result = await fetch(url);
            const data = await result.json();

            return Local.fromJson(data)

        } catch (error) {
            return error;
        }
    }
}
