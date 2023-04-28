
import { Local } from "../model/local";
import { Weather } from "../model/weather";
import { api } from "../repositories/api";
import { Repositorie } from "../repositories/repositorie";
import { UrlApi } from "../repositories/url";


export class Controller{

    async  getAll() {
   
       try {
           const repos = new Repositorie();
           return  await repos.getTudo();
       } catch (error) {
           return error;
       }
   }

}
