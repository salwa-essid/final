import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore } from 'react-toasts';



class UpdateAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      id: this.props.match.params.id,
      adminname: "",
      lastname: "",
      address: "",
      email: "",
      phone: ""
    };
  }

  handleChange = (e) => {
    if (e.target.name === "firstname") {
      this.setState({ adminname: e.target.value })
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
  }

  handleSubmit = () => {
    axios.put("http://127.0.0.1:5001/admin", {
      id: this.state.id,
      adminname: this.state.adminname,
      lastname: this.state.lastname,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone
    }, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("token")
        }
      }).then(success => {
        // if status 200 OK
        if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
          ToastsStore.error(success.data.error)
        } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
          ToastsStore.success(success.data.message)
          this.props.history.push("/admin/list");
        }
      }).catch(err => {
        if (err.status === 401) {
          this.props.history.push("login");
        }
        ToastsStore.error("Server error")
      })
  }

  getAdmin = () => {
    axios.get(`http://127.0.0.1:5001/admin/${this.props.match.params.id}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("token")
        }
      })
      .then((u) => {
        this.props.AdminInfoReducer(u.data.data.data);
        this.setState({
          adminname: this.props.admin.adminname,
          lastname: this.props.admin.lastname,
          address: this.props.admin.address,
          email: this.props.admin.email,
          phone: this.props.admin.phone
        });
      })
      .catch((err) => alert(err))
  }

  componentDidMount = () => {
    this.getAdmin();
  }
  render() {
    return (
      <section>
        <ToastsContainer store={ToastsStore} />
        <div className='contact-list-container'>
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" sm="12" md="12">
                <Card>
                  <CardBody>
                    <form>
                      <h1 className="h1 text-center text-success font-weight-bold">Update Admin</h1>
                      <hr></hr>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="firstname" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                            <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.adminname} placeholder="" aria-describedby="helpId" onChange={this.handleChange} />
                            <small id="helpId" className="text-muted">Help text</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                            <input type="text" className="form-control" name="lastname" id="" value={this.state.lastname} aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                            <small id="emailHelpId" className="form-text text-muted">Help text</small>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                            <input type="text" className="form-control" name="address" id="" value={this.state.address} aria-describedby="emailHelpId" placeholder="" onChange={this.handleChange} />
                            <small id="emailHelpId" className="form-text text-muted">Help text</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                            <input type="text" name="phone" id="" className="form-control" placeholder="" value={this.state.phone} aria-describedby="helpId" onChange={this.handleChange} />
                            <small id="helpId" className="text-muted">Help text</small>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="" className="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                            <input type="text" className="form-control" name="email" id="" aria-describedby="emailHelpId" value={this.state.email} placeholder="" onChange={this.handleChange} />
                            <small id="emailHelpId" className="form-text text-muted">Help text</small>
                          </div>
                        </div>
                        <div className="col-md-6">
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

const mapStateToProps = (state) => {
  return {
    admin: state.adminReducer
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    AdminInfoReducer: admin => {
      dispatch({
        type: 'ADMIN_INFO',
        admin
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateAdmin);
