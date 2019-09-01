import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300
        };
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
                                                <th>N.User</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>User User</td>
                                                <td>user@gmail.com</td>
                                                <td>97561998</td>
                                                <td>30</td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-xs-4 col-md-4 d-flex justify-content-end">
                                                            <i className="fa fa-info-circle t-green fa-lg"></i>
                                                        </div>
                                                        <div className="col-xs-4 col-md-4 d-flex justify-content-center">
                                                            <i className="fa fa-lock t-blue fa-lg"></i>
                                                        </div>
                                                        <div className="col-xs-4 col-md-4 d-flex justify-content-start">
                                                            <i className="fa fa-trash t-red fa-lg"></i>
                                                        </div>
                                                    </div>
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
        );
    }
}

export default Cards;
