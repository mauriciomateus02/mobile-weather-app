import { getAll } from "./repositorie";

export const api = {
    get: (url: string, fun: Function) => getAll(url,fun),
}