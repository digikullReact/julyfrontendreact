import React,{useState,useMemo} from 'react'

const Memohook = () => {
    const [count,setCount]=useState(1000);
    const [state,setState]=useState(0);
    const data=useMemo(()=>Calculate(count),[count])




    //its an expensive calculation
    function Calculate(num){
        console.log("Called");
       let sum=0;
        for(let i=0;i<num;i++){
            sum=sum+i;

        }
return sum;
    }

    //const data=Calculate(count);

    const increment=()=>{
        setCount(count+10000);
    }

    const changeAnother=()=>{
        setState(state+1);
    }
  return (
    <div>
 <div>Memohook</div>
 <h1>{data}</h1>
 <h1>{state}</h1>

<button onClick={increment}>
    Calculate
</button>

<button onClick={changeAnother}>
    ChangeAnother

</button>

    </div>
 
  )
}

export default Memohook