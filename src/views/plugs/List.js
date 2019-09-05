

import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import './List.css'

import ItemPlug from './Item'


class ListPlug extends Component {
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
        axios.get('http://127.0.0.1:5001/plugs',
        {
            headers: {
                Authorization: 'Bearer ' + token
            }})
        .then((res) => {
            this.props.updatePlugReducer(res.data.data.data);
        }).catch(e => {
            // handle errors 
        });
    }


    handlechange=(e)=>{ 
        this.setState({keyword:e.target.value})
             
                  }
    render() {
        const { plugs } = this.props


        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">Plug List</h1>
                                        <hr></hr>
                            <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={this.handlechange}/>
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                            </div>
                                                        <div className="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr className="bg-blue">
                                                    <th>Prospet FullName</th>
                                                    <th>Prospet E-mail</th>
                                                    <th>Prospet Phone</th>
                                                    <th>Prospet Mobile</th>
                                                    <th>Prospet City</th>
                                                    <th>Prospet avilability</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {plugs.filter(el => el.firstname.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemPlug key={index} item={el} />)}
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
        plugs: state.plugReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updatePlugReducer: plugs => {
            dispatch({
                type: 'UPDATE_PLUG',
                plugs
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListPlug);