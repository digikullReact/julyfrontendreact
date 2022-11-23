import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// controlled field belong to already existing ui libraries like material ui ,bootstrap react or ant design



const Controlled = () => {
  const schema = yup.object({
    name: yup.string().required(),
    password: yup.string().required(),
  }).required();

  const { register, handleSubmit,control, formState:{ errors },setValue } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {

    // call the api or do any kind of stuff with the form data
    console.log(data);
  }
  return (
    <div>

<Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Form.Control type="text"  {...register("name")}  placeholder="Enter name" />  }
      />
     
            <p>{errors.name?.message}</p>

       
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
     
        <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Form.Control type="password"  {...register("password")}  placeholder="Enter Password" /> }
      />
      </Form.Group>
   
      <p>{errors.password?.message}</p>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



    </div>
  )
}

export default Controlled