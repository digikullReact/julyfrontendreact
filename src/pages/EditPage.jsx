import React,{useEffect,useState} from 'react'
import AddFrom from '../components/AddFrom'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import config from "../config";



const EditPage = () => {
  let { id } = useParams();
  const [state,setState]=useState({
    name:"",
    age:"",
    address:""

  });


  const singleDataFromApi=()=>{
    axios.get(`${config.URL}/single/${id}`).then(response=>{
      console.log(response.data)
      setState(response.data);
    }).catch(err=>{
      console.log(err);
    })

  }

  useEffect(()=>{
    singleDataFromApi();

  },[])

  const CallEditApi=(editdata)=>{
    // make an api call here

    console.log("Edit called");

  }

  return (
    <div>
      <AddFrom data={state} CallEditApi={CallEditApi}/>


    </div>
  )
}

export default EditPage