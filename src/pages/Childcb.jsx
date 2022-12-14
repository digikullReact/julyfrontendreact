import { useEffect,memo } from 'react'
const ChildCb=(props)=>{
  console.log("child re rendered")

  
    return (
      <div>
      <h1>Child Cb Component</h1>

      <h1>Data From PArent Shown In child -{props.data}</h1>

      <button onClick={props.changeData}>
        Change Data Child
      </button>
  

  
      </div>
    )
  
  }

  export default memo(ChildCb);