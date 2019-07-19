import { hobby } from "../reducer";
//声明store的结构
export interface storePerson{
    name:string,
    age:number
}

export interface rootStore{
    person:storePerson,
    hobby:string[]
}