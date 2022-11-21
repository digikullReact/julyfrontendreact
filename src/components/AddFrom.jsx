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

    const { register, handleSubmit,reset,control,formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data =>{
      if(props.data){
        // we are in edit mode
       props.CallEditApi(data);
      }else{
        // We are in the add mode 
        props.AddItem(data)
      }
   
      reset()
      
    };

 
    
  return (
    <div>
        <Form  onSubmit={handleSubmit(onSubmit)  }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>

        <Controller
        name="age"
        control={control}
      
        render={({ field }) => <Form.Control {...register("age")} type="number"  value={props?.data?.age} placeholder="Enter Age" />}
      />
       <p style={{color:"red"}}>{errors.age?.message}</p>
       
      
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Controller
        name="name"
        control={control}
      
        render={({ field }) => <Form.Control {...register("name")}  value={props?.data?.name} type="text" placeholder="Enter Name" />}
      />
             <p style={{color:"red"}}>{errors.name?.message}</p>

      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Controller
        name="address"
        control={control}
      
        render={({ field }) => <Form.Control {...register("address")} value={props?.data?.address} type="text" placeholder="Enter Address" />}
      />     
             <p style={{color:"red"}}>{errors.address?.message}</p>

       </Form.Group>

       {
        props.data? <Button variant="primary" type="submit" >
        Edit
      </Button>: <Button variant="primary" type="submit">
        Submit
      </Button>
       }
  
     

   
    </Form>
    </div>
  )

  // Do conditional rendering for submit and edit Button based on props.data value

  // Call the edit api and edit the data /edit/:id
}

export default AddFrom