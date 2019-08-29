import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios'



class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            user: null
        };
    }

    componentDidMount = () => {

        // axios.get('http://127.0.0.1:5001/user/' + this.props.match.params.id).then((res) => {
        //     this.setState({ user: res.data.data.data }, () => {

        //     })
        //     console.log(res.data.data.data);
        // }).catch(error => {
        //     console.log(error);
        // })

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