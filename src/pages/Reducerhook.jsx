import React,{useReducer} from 'react'

const Reducerhook = () => {
const myReducer=(state,action)=>{

    // We are actually making the state change in here in our reducer rather than ,in our handleClick
    switch(action.type){
        case "input":
            state=action.payload;
            return state;

            case "click":
                state=action.payload;
                return state;     
          

         default:
            return state;   

    }
}
    const [state,dispatch]=useReducer(myReducer,"Hello World");
    const handleClick=()=>{
        //
        dispatch({type:"click",payload:"Hey there"})

    }

    const handleChange=(event)=>{
        dispatch({payload:event.target.value,type:"input"})



    }

  return (
    <div>
          <div>{state}</div>
          <input type={"text"} onChange={handleChange}/>

<button onClick={handleClick}>
    Change The Text

</button>

    </div>
  
  )
}

export default Reducerhook