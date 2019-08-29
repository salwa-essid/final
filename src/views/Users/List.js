import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'

import ItemUser from './Item'


class ListUser extends Component {






    componentDidMount = () => {

        axios.get('http://127.0.0.1:5001/users').then((res) => {
            this.props.updateUserReducer(res.data.data.data);

            console.log("data : ", res.data.data.data)
            //  this.setState({tabs: res.data.data.data});

        })




    }
    render() {
        const { users } = this.props


        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">User List</h1>
                                        <hr></hr>
                                        <div className="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr className="bg-blue">
                                                        <th>FullName</th>
                                                        <th>E-mail</th>
                                                        <th>Phone</th>
                                                        <th>N.User</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {console.log(users)}
                                                    {users.map((el, index) => <ItemUser key={index} item={el} />)}
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
const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateUserReducer: users => {
            dispatch({
                type: 'UPDATE_USER',
                users
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListUser);