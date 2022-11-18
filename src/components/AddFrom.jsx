import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
    address:yup.string().required()
  }).required();

const AddFrom = (props) => {

    const { register, handleSubmit, control,formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
     // const onSubmit = data => console.log(data);
    
  return (
    <div>
        <Form  onSubmit={handleSubmit(props.AddItem)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>

        <Controller
        name="age"
        control={control}
      
        render={({ field }) => <Form.Control {...register("age")} type="number" placeholder="Enter Age" />}
      />
       <p style={{color:"red"}}>{errors.age?.message}</p>
       
      
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Controller
        name="name"
        control={control}
      
        render={({ field }) => <Form.Control {...register("name")} type="text" placeholder="Enter Name" />}
      />
             <p style={{color:"red"}}>{errors.name?.message}</p>

      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Controller
        name="name"
        control={control}
      
        render={({ field }) => <Form.Control {...register("address")} type="text" placeholder="Enter Address" />}
      />     
             <p style={{color:"red"}}>{errors.address?.message}</p>

       </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>

   
    </Form>
    </div>
  )
}

export default AddFrom