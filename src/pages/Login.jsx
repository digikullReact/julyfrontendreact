import axios from 'axios';
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [state,setState]=useState({
        username:"",
        password:""

    })

    const handleChange=(event)=>{
        event.preventDefault();
        setState({...state,[event.target.name]:event.target.value});

    }

    const handleClick=()=>{

        axios.post("http://rustycoder.live:8181/auth/login",state).then(response=>{
            localStorage.setItem("token",response.data.access_token);
            navigate("/home");

        }).catch(err=>{
            console.log(err);

        })

    }
  return (
    <div>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name={"username"} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name={"password"}  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="click" onClick={handleClick}>
        Submit
      </Button>




    </div>
  )
}

export default Login