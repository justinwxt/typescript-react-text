import {storePerson} from './types/index'
import {changePersonAge,addHobbyType} from './actions/index'
export function person(state:storePerson={name:'justin',age:0},action:changePersonAge){
    switch(action.type){
        case 'add':
        
        return {...state, age:state.age+1}
        case 'minous':
        return {...state,age:state.age-1}
        default:
        return state
    
    }
    
}

export function hobby(state:string[]=['抽烟','喝酒','汤头'],action:addHobbyType){
    switch(action.type){
        case 'addHobby':
        let timeStamp = + new Date()
        return [...state,'love'+timeStamp]
        default:
        return state
    
    }
    
}