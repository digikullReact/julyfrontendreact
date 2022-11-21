import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const Searchresult = (props) => {
  return (
    <div>

<ListGroup>
    {
        props?.data?.map(ele=>(
            <ListGroup.Item>{ele.title}</ListGroup.Item>
        ))
    }
    
     
    </ListGroup>
    </div>
  )
}

export default Searchresult