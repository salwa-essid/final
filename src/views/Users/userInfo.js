import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios'
import Moment from 'react-moment';



class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            id: this.props.match.params.id,
            username: "",
            lastname: "",
            address: "",
            email: "",
            phone: "",
            createdAt: "",
            updatedAt: ""
        };
    }

    getUser = () => {
        axios.get(`http://127.0.0.1:5001/user/${this.props.match.params.id}`)
            .then((u) => {
                this.setState({
                    username: u.data.data.data.username,
                    lastname: u.data.data.data.lastname,
                    address: u.data.data.data.address,
                    email: u.data.data.data.email,
                    phone: u.data.data.data.phone,
                    createdAt: u.data.data.data.createdAt,
                    updatedAt: u.data.data.data.updatedAt
                });
            })
            .catch((err) => alert(err))
    }

    componentDidMount = () => {
        this.getUser();
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
                                        <h1 className="h1 text-center text-success font-weight-bold">User Info</h1>
                                        <hr></hr>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="font-weight-bold">Username</td>
                                                        <td>{this.state.username}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Lastname</td>
                                                        <td>{this.state.lastname}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Address</td>
                                                        <td>{this.state.address}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Email</td>
                                                        <td>{this.state.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Created at</td>
                                                        <td>
                                                            <Moment format="DD-MM-YYYY">{this.state.createdAt}</Moment>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold">Updated at</td>
                                                        <td>
                                                            <Moment format="DD-MM-YYYY">{this.state.updatedAt}</Moment>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
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
export default UserInfo;