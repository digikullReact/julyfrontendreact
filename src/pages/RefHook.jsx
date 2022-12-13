import React,{useRef,useState} from 'react'
import { useEffect } from 'react';

const RefHook = () => {
    const reff=useRef(0);
    const inputRef=useRef();
    const spanRef=useRef();

    const [state,setState]=useState(0);
    const [renders,setRenders]=useState(0);

    const changeState=()=>{
        setState(state+1)
     }

     const changeI=()=>{
        //setState(state+1)

      //console.log(  inputRef.current)
      inputRef.current.value="8888"
      spanRef.current.innerText="Hello world";
      spanRef.current.style.color="green";

     }

     // this is how you can observe the updation phase of component
     useEffect(()=>{
        //console.log("Re rendered")
        //setRenders(renders+1)
       // console.log("0");
       // reff.current=reff.current+1;

     })



  return (
    <div>

        <input type={"text"} ref={inputRef} />

  <button onClick={changeState}>
    Click to Change State
  </button>

  <button onClick={changeI}>
  
  Control InputField
  </button>

  <h1>Rerendered -{reff.current}</h1>

  <span ref={spanRef}>Hola</span>

    </div>
  )
}

export default RefHook