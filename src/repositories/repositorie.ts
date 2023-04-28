import { Local } from "../model/local";
import { Weather } from "../model/weather";
import { UrlApi } from "./url";

// export function getTudo(){
//     const url = String(UrlApi)
//     return fetch(url)
//     .then(resposta => resposta)
//     .then((json)=> {return json.result})
//     .catch((error) => console.error(error))

// }
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
