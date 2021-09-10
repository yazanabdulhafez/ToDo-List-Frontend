import React, { Component } from 'react';
import axios from 'axios';
import {Card,Button, Col, Row, Alert} from 'react-bootstrap';
import UpdateForm from './UpdateForm';
import CreateForm from './CreateForm';

export class Home extends Component {

constructor(props){
  super(props);
  this.state={
    listData:[],
    showUpdateForm:false,
    showCreateForm:false,
    title:'',
    description:'',
    date:'',
    id:0,

  }
}

componentDidMount=()=>{
  axios.get('https://todo-list-y.herokuapp.com/listItem').then(Response=>{
    console.log(Response);
    this.setState({
      listData:Response.data
    })
  }).catch(error=>console.log(error.message))
}


//////////////////////////////////////////

createTitleHandler=(e)=>{
  this.setState({
  title:e.target.value
  })
  }
  createDescriptionHandler=(e)=>{
    this.setState({
    description:e.target.value
  })
  }
  createDateHandler=(e)=>{
    this.setState({
    date:e.target.value
    })
  }
//////////////////////////////////////////
setTitleHandler=(e)=>{
this.setState({
title:e.target.value
})
}
setDescriptionHandler=(e)=>{
  this.setState({
  description:e.target.value
})
}
setDateHandler=(e)=>{
  this.setState({
  date:e.target.value
  })
}
//////////////////////////////////////////
showCreateForm=()=>{
  this.setState({
    showCreateForm:!this.state.showCreateForm,
  });
  };
  
  createItemData=(e)=>{
  e.preventDefault();
  axios.post(`https://todo-list-y.herokuapp.com/listItem`,
  {title:this.state.title,description:this.state.description,date:this.state.date}).then(()=>{
    axios.get('https://todo-list-y.herokuapp.com/listItem').then(Response=>{
      console.log(Response);
      this.setState({
        listData:Response.data,
        showCreateForm:true
      })
    }).catch(error=>console.log(error.message)) 
  })
  }
  
//////////////////////////////////////////
showUpdateForm=(id)=>{
this.setState({
  showUpdateForm:!this.state.showUpdateForm,
  id:id
});
};

updateItemData=(e)=>{
e.preventDefault();
axios.put(`https://todo-list-y.herokuapp.com/listItem/${this.state.id}`,
{title:this.state.title,description:this.state.description,date:this.state.date}).then(()=>{
  axios.get('https://todo-list-y.herokuapp.com/listItem').then(Response=>{
    console.log(Response);
    this.setState({
      listData:Response.data,
      showUpdateForm:true,
      showCreateForm:false
    })
  }).catch(error=>console.log(error.message)) 
})
}

/////////////////////////
deleteHandler=(id)=>{
  console.log(id);
  axios.delete(`https://todo-list-y.herokuapp.com/listItem/${id}`).then(()=>{
    axios.get('https://todo-list-y.herokuapp.com/listItem').then(Response=>{
    console.log(Response);
    this.setState({
      listData:Response.data,
      showUpdateForm:false,
      showCreateForm:false
    })
  }).catch(error=>console.log(error.message)) 
  })
}


///////////////////////////
handleClose=()=>{
  this.setState({
    showUpdateForm:false,
    showCreateForm:false
  })
}

  render() {
    return (
      <>
    <Alert  variant='success'>
    hello this is the home
  </Alert>
  <Button style={{marginLeft:'10px'}}
   onClick={()=>this.showCreateForm()}>add new mission</Button>
  <CreateForm
   showCreateForm={this.state.showCreateForm}
   handleClose={this.handleClose}
   createForm={this.createItemData}
   createTitleHandler={this.createTitleHandler}
   createDescriptionHandler={this.createDescriptionHandler}
   createDateHandler={this.createDateHandler}
  />
   <UpdateForm 
   showUpdateForm={this.state.showUpdateForm}
   handleClose={this.handleClose}
   updateForm={this.updateItemData}
   setTitleHandler={this.setTitleHandler}
   setDescriptionHandler={this.setDescriptionHandler}
   setDateHandler={this.setDateHandler}
   />
    <Row>
    {this.state.listData.map((element,index)=>{
      return(
 <Col key={index}style={{margin: '20px 10px'}}>
 <Card bg='warning' style={{ width: '18rem'}}>
 <Card.Title>{element.title}</Card.Title>
<Card.Body>
 
 <Card.Text>
  {element.description}
 </Card.Text>
 {element.date}
</Card.Body>
<Card.Footer style={{display:'flex',justifyContent:'space-between'}}>
<Button variant="primary"  onClick={()=>this.showUpdateForm(element._id)}>Update</Button>
  <Button  variant="secondary" onClick={()=>this.deleteHandler(element._id)}>Delete</Button>
</Card.Footer>

</Card>
</Col>
      )
    })}

   </Row>
</>
    )
  }
}

export default Home;
