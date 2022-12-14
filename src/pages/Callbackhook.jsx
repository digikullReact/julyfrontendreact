import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ChildCb from './Childcb'

const Callbackhook = () => {
  const [state,setState]=useState(0)

  const changeData=()=>{
    console.log("hello world")

  }
  const changeState=()=>{
    setState(state+1);
  }
  return (
    <div>
      <h1>Parent State - {state}</h1>
<ChildCb  changeData={changeData}/>

<button onClick={changeState}>
  ChangeState Parent
</button>

    </div>
  )
}

export default Callbackhook