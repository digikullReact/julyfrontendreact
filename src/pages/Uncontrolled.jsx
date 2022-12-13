import React from 'react'
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// Native HTML inputs
const Uncontrolled = () => {
    const schema = yup.object({
        name: yup.string().required("The name is very required field"),
        age: yup.number().required("age is evevevrvrvrv").positive("iiii").integer(),
      }).required();

      const { register, handleSubmit, formState:{ errors },setValue ,reset} = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => {

        // call the api or do any kind of stuff with the form data
        console.log(data);
        reset();
      }


  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
       <input type="text" placeholder='name' {...register("name")}  />
       <p style={{color:"red"}}>{errors.name?.message}</p>

       <input type="text" placeholder='age' {...register("age")}  />
       <p style={{color:"red"}}>{errors.age?.message}</p>

       <button>
        Submit Data
       </button>


     </form>


    </div>
  )
}

export default Uncontrolled