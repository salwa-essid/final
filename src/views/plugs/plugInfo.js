import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			id: this.props.match.params.id,
			username: '',
			lastname: '',
			address: '',
			email: '',
			password: '',
			phone: '',
			mobile: '',
			zipCode: '',
			city: '',
			situation: '',
			numberOfChild: '',
			activity: '',
			age: '',
			guarentee: '',
			mutual: '',
			bank: '',
			availability: '',
			createdAt: '',
			updatedAt: '',
		};
	}

	getPlug = () => {
		let token = localStorage.getItem('token');
		if (!token) {
			token = '';
		}
		axios
			.get(`http://127.0.0.1:5001/plug/${this.props.match.params.id}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.then(u => {
				this.setState({
					firstname: u.data.data.data.firstname,
					lastname: u.data.data.data.lastname,
					address: u.data.data.data.address,
					email: u.data.data.data.email,
					phone: u.data.data.data.phone,

					mobile: u.data.data.data.mobile,
					zipCode: u.data.data.data.zipCode,
					city: u.data.data.data.city,
					situation: u.data.data.data.situation,
					numberOfChild: u.data.data.data.numberOfChild,
					activity: u.data.data.data.activity,
					age: u.data.data.data.age,
					guarentee: u.data.data.data.guarentee,
					mutual: u.data.data.data.mutual,
					bank: u.data.data.data.bank,
					availability: u.data.data.data.availability,
					createdAt: u.data.data.data.createdAt,
					updatedAt: u.data.data.data.updatedAt,
				});
			})
			.catch(err => alert(err));
	};

	componentDidMount = () => {
		this.getPlug();
	};

	render() {
		return (
			<section>
				<div className="contact-list-container">
					<div className="animated fadeIn">
						<Row>
							<Col xs="12" sm="12" md="12">
								<Card>
									<CardBody>
										<h1 className="h1 text-center text-success font-weight-bold">Plug Info</h1>
										<hr></hr>
										<div className="table-responsive">
											<table className="table">
												<tbody>
													<tr>
														<td className="font-weight-bold">firstname</td>
														<td>{this.state.firstname}</td>
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
														<td className="font-weight-bold">Phone</td>
														<td>{this.state.phone}</td>
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
												<Link to="/plug/list">
													<div className=" d-flex justify-content-start pl-5">
														<button
															type="button"
															name=""
															id=""
															className="btn btn-danger font-weight-bold w-25 btn-lg"
														>
															<i className="fa fa-refresh pr-3"></i> List
														</button>
													</div>
												</Link>
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
