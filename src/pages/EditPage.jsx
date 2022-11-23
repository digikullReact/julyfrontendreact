import React,{useEffect,useState} from 'react'
import AddFrom from '../components/AddFrom'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import config from "../config";



const EditPage = () => {
  let { id } = useParams();


const CallEditApi=(editdata)=>{
    // make an api call here
axios.put(`${config.URL}/edit/${id}`,editdata).then(response=>{
    console.log(response);
  }).catch(err=>{
    console.log(err);
  })

  }

  return (
    <div>
      <AddFrom id={id} CallEditApi={CallEditApi}/>


    </div>
  )
}

export default EditPage