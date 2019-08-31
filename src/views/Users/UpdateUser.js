import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import {connect} from 'react-redux'
import axios from 'axios'



class UpdateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            user: null
        };
    }

    componentDidMount=()=>

    {
        this.setState({
            ...this.props.users.filter(el=>el.id===this.props.id)[0]
        })
    }

        // axios.get('http://127.0.0.1:5001/user/' + this.props.match.params.id).then((res) => {
        //     this.setState({ user: res.data.data.data }, () => {

        //     })
        //     console.log(res.data.data.data);
        // }).catch(error => {
        //     console.log(error);
        // })

    
    editUser=()=>
    {
       axios.put(`/edit-user/${this.state.id}`,{
        username: this.state.username,
        lastname: this.state.lastname,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone
     }) 
      .then(()=>this.props.editUserReducer({...this.state})) 
      .catch((err)=>alert(err))
    }
  

    render() {
        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" md="12">
                            <Card>
              <CardBody>
                <form>
                  <h1 className="h1 text-center text-success font-weight-bold">Update User</h1>
                  <hr></hr>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                        <input type="text" name="firstname" id="" class="form-control" placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                        <small id="helpId" class="text-muted">Help text</small>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                        <input type="text" class="form-control" name="lastname" id="" aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                        <small id="emailHelpId" class="form-text text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                        <input type="text" class="form-control" name="address" id="" aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                        <small id="emailHelpId" class="form-text text-muted">Help text</small>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                        <input type="text" name="phone" id="" class="form-control" placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                        <small id="helpId" class="text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                        <input type="text" class="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                        <small id="emailHelpId" class="form-text text-muted">Help text</small>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary"> <i className="fa fa-lock fa-lg pr-2"></i> Password</label>
                        <input type="password" name="password" id="" class="form-control" placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                        <small id="helpId" class="text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr />
                    <div class="row">
                      <div class="col-md-6 d-flex justify-content-start pl-3">
                        <button type="button" name="" id="" class="btn btn-danger font-weight-bold w-25 btn-lg"><i className="fa fa-refresh pr-2"></i> Reset</button>
                      </div>
                      <div class="col-md-6 d-flex justify-content-end pr-3">
                        <button type="button" name="" id="" class="btn btn-success font-weight-bold w-25 btn-lg" onClick={this. editUser}>
                          <i className="fa fa-send pr-2 "></i> Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          
                           </Col>
                        </Row>
                    </div>
                </div>

            </section>
        );
    }
}

const mapStateToProps=(state)=>
{
    return {
        users:state.userReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editUserReducer:edituser=>
        {
            dispatch({
                type:'EDIT_USER',
                edituser
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser);