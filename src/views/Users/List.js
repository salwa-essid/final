import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import './List.css'

import ItemUser from './Item'


class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
                keyword:''
          }}
    componentDidMount = () => {
        let token = localStorage.getItem("token");
        if (!token) {
            token = "";
        }
        axios.get('http://127.0.0.1:5001/users',
        {
            headers: {
                Authorization: 'Bearer ' + token
            }})
        .then((res) => {
            this.props.updateUserReducer(res.data.data.data);
        }).catch(e => {
            // handle errors 
        });
    }


    handlechange=(e)=>{ 
        this.setState({keyword:e.target.value})
             
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
                            <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={this.handlechange}/>
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                            </div>
                                        <div className="table-responsive py-3">
                                            <table className="table">
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
                                                    {users.filter(el => el.username.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemUser key={index} item={el} />)}
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