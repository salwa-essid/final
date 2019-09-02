import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'

import ItemAdmin from './Item'


class ListAdmin extends Component {
    componentDidMount = () => {

        axios.get('http://127.0.0.1:5001/admins').then((res) => {
            this.props.updateAdminReducer(res.data.data.data);
        }).catch(e => {
            // handle errors 
        });
    }
    render() {
        const { admins} = this.props


        return (
            <section>
                <div className='contact-list-container'>

                    <div className="animated fadeIn">
                        <Row>
                            <Col xs="12" sm="12" md="12">
                                <Card>
                                    <CardBody>
                                        <h1 className="h1 text-center text-success font-weight-bold">Admin List</h1>
                                        <hr></hr>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr className="bg-blue">
                                                        <th>FullName</th>
                                                        <th>E-mail</th>
                                                        <th>Phone</th>
                                                        <th>N.Admin</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {admins.map((el, index) => <ItemAdmin key={index} item={el} />)}
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
        admins: state.adminReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateAdminReducer: admins => {
            dispatch({
                type: 'UPDATE_ADMIN',
                admins
            })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListAdmin);