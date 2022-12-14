import { useEffect } from 'react'
const ChildCb=(props)=>{

  
    return (
      <div>
      <h1>Child Cb Component</h1>
  
  <button onClick={props.changeData}>
    Child Button
  </button>
  
      </div>
    )
  
  }

  export default ChildCb;