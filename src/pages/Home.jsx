import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../components/List";
import config from "../config";
import axios from "axios";
import AddFrom from "../components/AddFrom";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate =useNavigate();

  const callApi = () => {
    console.log("Api Called");
    axios
      .get(`${config.URL}/`)
      .then((response) => {
        // console.log(response.data);
        setState(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteItem = (id) => {
    // Will make delete api call
    axios
      .delete(`${config.URL}/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        setIsDeleted(!isDeleted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddItem = (data) => {
    axios
      .post(`${config.URL}/add`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //  console.log(data);

    // Just call the api
  };
    

  const handleRedirect=(id)=>{

    navigate(`/edit/${id}`)

  }

  

    useEffect(()=>{
    
        callApi();

    },[isDeleted])

  

  useEffect(() => {
    callApi();
  }, [isDeleted]);

  return (
    <Container>
      <Row>
        <Col>
          <List data={state} DeleteItem={DeleteItem} handleRedirect={handleRedirect} />
        </Col>
        <Col>
          <AddFrom AddItem={AddItem}  />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
