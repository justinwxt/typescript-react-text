import * as React from 'react'
import {storePerson} from './types/index'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {addPersonAge,minousPersonAge,adPersondHobby} from './actions'
import {rootStore} from './types/index'
import { hobby } from './reducer';
//声明props类型
export interface Props {
    age:number,
    name:string,
    addAge:()=>void,
    minousAge:()=>void,
    hobbys:string[],
    addHobby:()=>void
}

class Test extends React.Component<Props>{
    constructor(props:Props){
        super(props)
    }
    render(){
        let {name,age,addAge,minousAge,hobbys,addHobby} = this.props
        return (<div>

            <div>there is a person</div>
            <p>he is {name}</p>
            <p>he is {age} years old</p>
            <button onClick={()=>{addAge();console.log('add age')}}>add age</button>
            
          <button onClick={()=>{minousAge();console.log('minous age')}}>minous age</button>
          <br/>
          <div>he have hobbys as below:</div>
          {hobbys.map((ele)=><div key={ele}>{ele}</div>)}
          <hr/>
          <button onClick={()=>addHobby()}>add hobby</button>
        </div>)
    }
}
export function mapStateToProps({ person,hobby }:rootStore) {
    return {
      name:person.name,
      age:person.age,
      hobbys:hobby
    }
  }
  export function mapDispatchToProps(dispatch:Dispatch) {
    return {
      addAge: () => dispatch(addPersonAge),
      minousAge: () => dispatch(minousPersonAge),
      addHobby:()=>dispatch(adPersondHobby)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Test) 