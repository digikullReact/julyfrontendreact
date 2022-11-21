import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Searchresult from '../components/Searchresult';
import axios from 'axios';


const Search = () => {
    const [state,setState]=useState([]);

    const[search,setSearch]=useState("");

const handleChange=(event)=>{
    //setSearch(event.target.value);
    apiCall(event.target.value);

}

const apiCall=(search)=>{
    axios.post("http://rustycoder.live:8000/listing/search",{search,limit:10,page:0}).then(response=>{
        console.log(response.data.data);
        setState(response.data.data.listing)
    }).catch(err=>{
        console.log(err);
    })
    
}
/*
useEffect(()=>{
    apiCall();
},[search])
*/

  return (
    <div>

<Form.Label htmlFor="inputPassword5">Search It</Form.Label>
      <Form.Control
        type="text"
        id="searchIt"
        aria-describedby="passwordHelpBlock"
        onChange={handleChange}
      />
     
    

<Searchresult data={state}/>



    </div>
  )
}

export default Search