import { string } from "prop-types";
//定义action，声明action类型
export interface changePersonAge{
    type:string
}
export const addPersonAge = {type:'add'}
export const minousPersonAge = {type:'minous'}

export interface addHobbyType  {type:string}
export const adPersondHobby = {type:'addHobby'}