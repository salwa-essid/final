import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios'
// import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
class AddUser extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
       usename:'',
      lastname:'',
      phone:'',
      email:'',
      address:'',
      password:''

    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

handelChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value})
       
    }

    // adduser=()=>
    // {
    //   axios.post('http://127.0.0.1:5001/user',{...this.state})
    //    .then(data=>{
    //      if(data){
    //        console.log(data.data)
    //      }
    //    })
    //    .catch((err)=>alert(err)) 
    // }



    adduser=()=>
    {
      const dataa = {
        "username": "mohamed",
        "lastname": "essid",
        "address": "sbeitla",
        "email": "mohamed.essid@gmail.com",
        "password": "mohamed1234",
        "phone": "98678645",
        "isActive": false
    
    }
     // console.log({...this.state})
      axios.post('http://127.0.0.1:5001/user',dataa)
       .then(data=>{
         console.log(data.data)
        this.props.addReducer(dataa)
       })
       .catch((err)=>alert(err)) 
    }

    
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardBody>
                <form>
                  <h1 className="h1 text-center text-success font-weight-bold">Add User</h1>
                  <hr></hr>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                        <input type="text"  id="" class="form-control" placeholder="" aria-describedby="helpId" name='username' onChange={this.handelChange}/>
                        <small id="helpId" class="text-muted">Help text</small>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                        <input type="text" class="form-control"  id="" aria-describedby="emailHelpId" placeholder="" name=' lastname' onChange={this.handelChange}/>
                        <small id="emailHelpId" class="form-text text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                        <input type="text" class="form-control" id="" aria-describedby="emailHelpId" placeholder="" name=' address' onChange={this.handelChange} />
                        <small id="emailHelpId" class="form-text text-muted">Help text</small>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                        <input type="text"  id="" class="form-control" placeholder="" aria-describedby="helpId" name='phone' onChange={this.handelChange}/>
                        <small id="helpId" class="text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                        <input type="email" class="form-control"  id="" aria-describedby="emailHelpId" placeholder="" name='email' onChange={this.handelChange} />
                        <small id="emailHelpId" class="form-text text-muted">Help text</small>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"> <i className="fa fa-lock fa-lg pr-2"></i> Password</label>
                        <input type="password"  id="" class="form-control" placeholder="" aria-describedby="helpId" name='Password' onChange={this.handelChange}/>
                        <small id="helpId" class="text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr />
                    <div class="row">
                      <div class="col-md-6 d-flex justify-content-start pl-3">
                        <button type="button" name="" id="" class="btn btn-danger font-weight-bold w-25 btn-lg">
                          <i className="fa fa-refresh pr-2"></i> Reset</button>
                      </div>
                       
                      <div className="col-md-6 d-flex justify-content-end pr-3">
                      {/* <Link to='/users/list'> */}
                     <button type="button" name="" id="" className="btn btn-success font-weight-bold w-25 btn-lg"
                        onClick={this.adduser}>
                          <i className="fa fa-send pr-2"></i> Submit</button>
                          {/* </Link> */}
                      </div>
                        
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      addReducer:newuser=>{
          dispatch({
               type:'ADD_USER',
               newuser
          })
      }
  }
  }
export default connect(null,mapDispatchToProps)(AddUser);
