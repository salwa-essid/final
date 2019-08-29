import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';




const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};




class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      firstName: null,
      lastName: null,
      Address:null,
      phone:null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        Address:"",
        phone:"",
        email: "",
        password: ""
      }
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }




  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
         Phone: ${this.state.phone}
         Address: ${this.state.Address}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
        case "phone":
        formErrors.phone =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
        case "Address":
        formErrors.Address=
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardBody>
                <form onSubmit={this.handleSubmit} noValidate>
                  <h1 className="h1 text-center text-success font-weight-bold">Add Admin</h1>
                  <hr></hr>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary">
                          <i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label><br/>
                        <input type="text" 
                               name="firstName" 
                               id="" 
                               className={formErrors.firstName.length > 0 ? "error" : null} 
                               placeholder="First Name" 
                               aria-describedby="helpId" 
                               noValidate
                               onChange={this.handleChange}
                        /> 
                      <div className='text-danger'>
                        {formErrors.firstName.length > 0 && (
                          <span className="errorMessage">{formErrors.firstName}</span>)}
                      </div>
                     </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary">
                          <i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label><br/>
                        <input type="email" 
                               className={formErrors.lastName.length > 0 ? "error" : null}
                                name="lastName" 
                                id="" 
                                aria-describedby="emailHelpId" 
                                placeholder="Last Name"
                                noValidate
                                onChange={this.handleChange} /><br/>
                                <div className='text-danger'>
                                {formErrors.lastName.length > 0 && (
                                 <span className="errorMessage">{formErrors.lastName}</span>
                                 )}
                                </div>
                      
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary">
                          <i className="fa fa-user-circle fa-lg pr-2"></i> Address</label><br/>
                        <input type="text" 
                               name="Address" 
                               id="" 
                               className={formErrors.Address.length > 0 ? "error" : null} 
                               placeholder="Address" 
                               aria-describedby="helpId" 
                               noValidate
                               onChange={this.handleChange}
                        /> 
                      <div className='text-danger'>
                        {formErrors.Address.length > 0 && (
                          <span className="errorMessage">{formErrors.Address}</span>)}
                      </div>
                     </div>
                    </div>
                     <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary">
                          <i className="fa fa-user-circle fa-lg pr-2"></i>Phone</label><br/>
                        <input type="text" 
                               name="phone" 
                               id="" 
                               
                               className={formErrors.phone.length > 0 ? "error" : null} 
                               placeholder="Phone" 
                               aria-describedby="helpId" 
                               noValidate
                               onChange={this.handleChange}
                        /> 
                      <div className='text-danger'>
                        {formErrors.phone.length > 0 && (
                          <span className="errorMessage">{formErrors.phone}</span>)}
                      </div>
                     </div>
                    </div>
                    </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary">
                          <i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label><br/>
                        <input 
                        className={formErrors.email.length > 0 ? "error" : null}
                        placeholder="Email"
                        type="email"
                        name="email"
                        noValidate
                        onChange={this.handleChange} 
                         id="" 
                         aria-describedby="emailHelpId" /><br/>
                        <div  className='text-danger'> 
                        {formErrors.email.length > 0 && (
                     <span className="errorMessage">{formErrors.email}</span> )}   
                   </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="" class="font-weight-bold text-primary">
                           <i className="fa fa-lock fa-lg pr-2">
                          </i> Password</label><br/>
                        <input className={formErrors.password.length > 0 ? "error" : null}
                               placeholder="Password"
                               type="password"
                               name="password"
                               noValidate
                               onChange={this.handleChange} />
                       <div className='text-danger'>{formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}</div>
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
                        <button type="button" name="" id="" class="btn btn-success font-weight-bold w-25 btn-lg"><i className="fa fa-send pr-2"></i> Submit</button>
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

export default Cards;
