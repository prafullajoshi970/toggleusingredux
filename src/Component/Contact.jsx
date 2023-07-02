import React from 'react'
import Nav from './Nav'
import { useDispatch,useSelector } from 'react-redux'

const Contact = () => {
     
    const count=useSelector((storeData)=>{
        return storeData;
    })
    const dispatch=useDispatch();

    
  return (
    <div style={{height:'100vh'}} className={count?'darkmode':'lightmode'}>
        <Nav></Nav>
        {!count?<button onClick={()=>dispatch({type:'light'})}>Toggle To Dark</button>:<button onClick={()=>dispatch({type:'dark'})}>Toggle To white</button>} 
        <h2>You Can mail me help Geekster!!!</h2>
        </div>
  )
}

export default Contact