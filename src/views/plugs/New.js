import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

class AddUser extends Component {
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
                                <form>
                                    <h1 className="h1 text-center text-success font-weight-bold">Add Plug</h1>
                                    <hr></hr>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Firstname</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-user-circle fa-lg pr-2"></i> Lastname</label>
                                                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-map-marker fa-lg pr-2"></i> Address</label>
                                                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-phone fa-lg pr-2"></i> Phone</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-envelope fa-lg pr-2"></i> E-mail</label>
                                                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"> <i className="fa fa-mobile fa-lg pr-2"></i> Mobile</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-code-fork fa-lg pr-2"></i> Zip code</label>
                                                <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"> <i className="fa fa-home fa-lg pr-2"></i> City</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-heart fa-lg pr-2"></i> Situation</label>
                                                <div class="form-group">
                                                    <select class="form-control" name="" id="">
                                                        <option>Married</option>
                                                        <option>Signle</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"> <i className="fa fa-child fa-lg pr-2"></i> Number of childs</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-creative-commons fa-lg pr-2"></i> Acivity</label>
                                                <div class="form-group">
                                                    <select class="form-control" name="" id="">
                                                        <option>Working</option>
                                                        <option>Unemployed</option>
                                                    </select>
                                                </div>
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"> <i className="fa fa-birthday-cake fa-lg pr-2"></i> Age</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-list fa-lg pr-2"></i> Guarantee</label>
                                                <div class="form-group">
                                                    <select class="form-control" name="" id="">
                                                        <option>Working</option>
                                                        <option>Unemployed</option>
                                                    </select>
                                                </div>
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"> <i className="fa fa-list-ol fa-lg pr-2"></i> Mutual</label>
                                                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" />
                                                <small id="helpId" class="text-muted">Help text</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-bank fa-lg pr-2"></i> Bank</label>
                                                <div class="form-group">
                                                    <select class="form-control" name="" id="">
                                                        <option>Working</option>
                                                        <option>Unemployed</option>
                                                    </select>
                                                </div>
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="" class="font-weight-bold text-primary"><i className="fa fa-check fa-lg pr-2"></i> Availability</label>
                                                <div class="form-group">
                                                    <select class="form-control" name="" id="">
                                                        <option>Available</option>
                                                        <option>Unavailable</option>
                                                    </select>
                                                </div>
                                                <small id="emailHelpId" class="form-text text-muted">Help text</small>
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

export default AddUser;
