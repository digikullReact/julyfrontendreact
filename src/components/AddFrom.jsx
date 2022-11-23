import React ,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router-dom';



const AddFrom = (props) => {
  const navigate=useNavigate();
  const [state,setState]=useState({
    name:"",
    age:0,
    address:""
 
  })
  const [isEdit,setIsEdit]=useState(false);

  const schema = yup.object({
    name: yup.string().required().default(state.name),
    age: yup.number().positive().integer().required().default(state.age),
    address:yup.string().required().default(state.address)
  }).required();

  const { register, handleSubmit,reset,control,formState:{ errors },setValue } = useForm({
    resolver: yupResolver(schema)
  });
 


  const singleDataFromApi=()=>{
    axios.get(`${config.URL}/single/${props.id}`).then(response=>{
  
      setValue("name",response.data.name)
      setValue("age",response.data.age)

      setValue("address",response.data.address)

      
    }).catch(err=>{
      console.log(err);
    })

  }

 

  useEffect(()=>{
   
    singleDataFromApi();
  

  },[])





    const onSubmit = data =>{
      if(props.id){
        data._id=props.id;
        // we are in edit mode
       props.CallEditApi(data);
       navigate("/home")

      // setIsEdit(!isEdit);  // it shoule be inside callback

      }else{
        // We are in the add mode 
        props.AddItem(data)
      }
   
      //reset()
      
    };

 
    
  return (
    <div>
        <Form  onSubmit={handleSubmit(onSubmit)  }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>

        <Controller
        name="age"
        control={control}
      
        render={({ field }) => <Form.Control {...register("age")} type="number"   placeholder="Enter Age" />}
      />
       <p style={{color:"red"}}>{errors.age?.message}</p>
       
      
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Controller
        name="name"
        control={control}
      
        render={({ field }) => <Form.Control {...register("name")} name="name"  type="text" placeholder="Enter Name" />}
      />
             <p style={{color:"red"}}>{errors.name?.message}</p>

      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Controller
        name="address"
        control={control}
      
        render={({ field }) => <Form.Control {...register("address")} name="address"  type="text"  placeholder="Enter Address" />}
      />     
             <p style={{color:"red"}}>{errors.address?.message}</p>

       </Form.Group>

       {
        props.id? <Button variant="primary" type="submit" >
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