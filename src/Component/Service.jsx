import React from 'react'
import Nav from './Nav'
import { useDispatch,useSelector } from 'react-redux'

const Service = () => {
     
    const count=useSelector((storeData)=>{
        return storeData;
    })
    const dispatch=useDispatch();

    
  return (
    <div style={{height:'100vh'}} className={count?'darkmode':'lightmode'}>
        <Nav></Nav>
        {!count?<button onClick={()=>dispatch({type:'light'})}>Toggle To Dark</button>:<button onClick={()=>dispatch({type:'dark'})}>Toggle To white</button>} 
       <h2>Our Services are Not Available</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et animi accusamus veniam fugit? Reprehenderit, deserunt! Ducimus iste magnam nulla nemo ea hic pariatur? Tempora repellat laboriosam velit praesentium vel exercitationem.</p>
        </div>
  )
}

export default Service