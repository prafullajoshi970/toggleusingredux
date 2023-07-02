import React from 'react'
import Nav from './Nav'
import { useDispatch,useSelector } from 'react-redux'

const Home = () => {
   
    const count=useSelector((storeData)=>{
        return storeData;
    })
    const dispatch=useDispatch();

    

  return (
    <div style={{height:'100vh'}} className={count?'darkmode':'lightmode'}>
        <Nav></Nav>
       {!count?<button onClick={()=>dispatch({type:'light'})}>Toggle To Dark</button>:<button onClick={()=>dispatch({type:'dark'})}>Toggle To white</button>} 
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima modi obcaecati, possimus soluta ea odit! Repellendus iusto ipsa, at, ad quae recusandae aliquam itaque maiores, consectetur magnam doloribus ex suscipit!</p>
    </div>
  )
}

export default Home