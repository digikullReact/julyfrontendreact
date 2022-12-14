import React from 'react'
import { useState } from 'react'
import { useEffect,useCallback } from 'react'
import ChildCb from './Childcb'

const Callbackhook = () => {
  const [state,setState]=useState(0)


  const changeState=()=>{
    setState(state+1);
  }

  const changeData=useCallback(()=>{
    console.log("hello world")
  },[])
  return (
    <div>
      <h1>Parent State - {state}</h1>
      {
        /**When the data will change then only ChildCb will re render other wise it wont if you memoize it
         * <ChildCb data={state}  />
         */
      }

<ChildCb changeData={changeData}  />


<button onClick={changeState}>
  ChangeState Parent
</button>

    </div>
  )
}

export default Callbackhook