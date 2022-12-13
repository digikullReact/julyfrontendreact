import React,{useContext} from 'react'
import DataContext from '../context'


const Something = () => {
  const state=useContext(DataContext);
  return (
    <div>{
       state.name
      
      }
      {
        state.age
      }
      </div>
  )
}

export default Something