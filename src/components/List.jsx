import Button from 'react-bootstrap/Button';
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const List = (props) => {

  const handleClick=(id)=>{
    props.DeleteItem(id);
  }

  const handleRedirect=(id)=>{
    props.handleRedirect(id);
  }
  return (
    <div>
        <ListGroup>
            {
                props.data.map(ele=>(
                    <ListGroup.Item key={ele._id}>{ele.name} 
                    <Button  variant="primary" onClick={()=>handleClick(ele._id)}>Delete</Button>
                    <Button variant="info" type="button" onClick={()=>handleRedirect(ele._id)}>
Edit     
 </Button>
                     </ListGroup.Item>


                ))
            }
    
  </ListGroup></div>
  )
}

export default List