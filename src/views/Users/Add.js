import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      username: "",
      lastname: "",
      address: "",
      email: "",
      password: "",
      phone: ""
    };
  }

  handleChange = (e) => {
    if (e.target.name === "firstname") {
      this.setState({ username: e.target.value })
    }
    if (e.target.name === "lastname") {
      this.setState({ lastname: e.target.value })
    }
    if (e.target.name === "address") {
      this.setState({ address: e.target.value })
    }
    if (e.target.name === "email") {
      this.setState({ email: e.target.value })
    }
    if (e.target.name === "phone") {
      this.setState({ phone: e.target.value })
    }
    if (e.target.name === "password") {
      this.setState({ password: e.target.value })
    }
  }

  handleSubmit = () => {
    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    Axios.post("http://127.0.0.1:5001/user", {
      username: this.state.username,
      lastname: this.state.lastname,
      address: this.state.address,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone
    },
    {
      headers: {
          Authorization: 'Bearer ' + token
      }
  }).then(success => {
      // if status 200 OK
      if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
        ToastsStore.error(success.data.error)
      } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
        ToastsStore.success(success.data.message)
        this.props.history.push("/users/list");
      }
    }).catch(err => {
      ToastsStore.error("Server error")
    })
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <ToastsContainer store={ToastsStore} />
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardBody>
                <form>
                  <h1 className="h1 text-center text-success font-weight-bold">Add User</h1>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                        <input type="text" name="firstname" id="" className="form-control" placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                        <small id="helpId" className="text-muted">Help text</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                        <input type="text" className="form-control" name="lastname" id="" aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                        <small id="emailHelpId" className="form-text text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                        <input type="text" className="form-control" name="address" id="" aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                        <small id="emailHelpId" className="form-text text-muted">Help text</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                        <input type="text" name="phone" id="" className="form-control" placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                        <small id="helpId" className="text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                        <input type="text" className="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                        <small id="emailHelpId" className="form-text text-muted">Help text</small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="" className="font-weight-bold text-primary"> <i className="fa fa-lock fa-lg pr-2"></i> Password</label>
                        <input type="password" name="password" id="" className="form-control" placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                        <small id="helpId" className="text-muted">Help text</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6 d-flex justify-content-start pl-3">
                        <button type="button" name="" id="" className="btn btn-danger font-weight-bold w-25 btn-lg"><i className="fa fa-refresh pr-2"></i> Reset</button>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end pr-3">
                        <button type="button" name="" id="" className="btn btn-success font-weight-bold w-25 btn-lg" onClick={this.handleSubmit}>
                          <i className="fa fa-send pr-2"></i> Submit</button>
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
export default AddUser;
