import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Axios from 'axios';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class AddUser extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,

			firstname: '',
			lastname: '',
			address: '',
			email: '',
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
			availability: true,
		};
	}

	handleChange = e => {
		if (e.target.name === 'firstname') {
			this.setState({ firstname: e.target.value });
		}
		if (e.target.name === 'lastname') {
			this.setState({ lastname: e.target.value });
		}
		if (e.target.name === 'address') {
			this.setState({ address: e.target.value });
		}
		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}
		if (e.target.name === 'phone') {
			this.setState({ phone: e.target.value });
		}
		if (e.target.name === 'mobile') {
			this.setState({ mobile: e.target.value });
		}
		if (e.target.name === 'zipcode') {
			this.setState({ zipCode: e.target.value });
		}
		if (e.target.name === 'city') {
			this.setState({ city: e.target.value });
		}
		if (e.target.name === 'situation') {
			this.setState({ situation: e.target.value });
		}
		if (e.target.name === 'numberOfChild') {
			this.setState({ numberOfChild: e.target.value });
		}
		if (e.target.name === 'activity') {
			this.setState({ activity: e.target.value });
		}
		if (e.target.name === 'age') {
			this.setState({ age: e.target.value });
		}
		if (e.target.name === 'guarentee') {
			this.setState({ guarentee: e.target.value });
		}
		if (e.target.name === 'mutual') {
			this.setState({ mutual: e.target.value });
		}
		if (e.target.name === 'bank') {
			this.setState({ bank: e.target.value });
		}
		if (e.target.name === 'availability') {
			this.setState({ availability: e.target.value === '' });
		}
	};
	handleSubmit = () => {
		let token = localStorage.getItem('token');
		if (!token) {
			token = '';
		}
		Axios.post(
			'http://127.0.0.1:5001/plug',
			{
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				address: this.state.address,
				email: this.state.email,
				password: this.state.password,
				phone: this.state.phone,
				mobile: this.state.mobile,
				zipCode: this.state.zipCode,
				city: this.state.city,
				situation: this.state.situation,
				numberOfChild: this.state.numberOfChild,
				activity: this.state.activity,
				age: this.state.age,
				guarentee: this.state.guarentee,
				mutual: this.state.mutual,
				bank: this.state.bank,
				availability: this.state.availability,
			},
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}
		)
			.then(success => {
				// if status 200 OK
				if (typeof success.data.error != 'undefined' && success.data.error !== '') {
					ToastsStore.error(success.data.error);
				} else if (typeof success.data.message != 'undefined' && success.data.message !== '') {
					ToastsStore.success(success.data.message);
					this.props.history.push('/plug/list');
				}
			})
			.catch(err => {
				ToastsStore.error('Server error');
			});
	};

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	toggleFade() {
		this.setState(prevState => {
			return { fadeIn: !prevState };
		});
	}

	render() {
		return (
			<div className="animated fadeIn">
				<ToastsContainer store={ToastsStore} />
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
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-user-circle fa-lg pr-2"></i> Firstname
												</label>
												<input
													type="text"
													name="firstname"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-user-circle fa-lg pr-2"></i> Lastname
												</label>
												<input
													type="text"
													class="form-control"
													name="lastname"
													id=""
													aria-describedby="emailHelpId"
													placeholder=""
													onChange={this.handleChange}
												/>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-map-marker fa-lg pr-2"></i> Address
												</label>
												<input
													type="text"
													class="form-control"
													name="address"
													id=""
													aria-describedby="emailHelpId"
													placeholder=""
													onChange={this.handleChange}
												/>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-phone fa-lg pr-2"></i> Phone
												</label>
												<input
													type="text"
													name="phone"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-envelope fa-lg pr-2"></i> E-mail
												</label>
												<input
													type="email"
													class="form-control"
													name="email"
													id=""
													aria-describedby="emailHelpId"
													placeholder=""
													onChange={this.handleChange}
												/>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													{' '}
													<i className="fa fa-mobile fa-lg pr-2"></i> Mobile
												</label>
												<input
													type="text"
													name="mobile"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-code-fork fa-lg pr-2"></i> Zip code
												</label>
												<input
													type="text"
													class="form-control"
													name="zipcode"
													id=""
													aria-describedby="emailHelpId"
													placeholder=""
													onChange={this.handleChange}
												/>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													{' '}
													<i className="fa fa-home fa-lg pr-2"></i> City
												</label>
												<input
													type="text"
													name="city"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-heart fa-lg pr-2"></i> Situation
												</label>
												<div class="form-group">
													<select
														class="form-control"
														name="situation"
														id=""
														onChange={this.handleChange}
													>
														<option>Married</option>
														<option>Signle</option>
														<option>Other</option>
													</select>
												</div>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													{' '}
													<i className="fa fa-child fa-lg pr-2"></i> Number of childs
												</label>
												<input
													type="text"
													name="numberOfChild"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-creative-commons fa-lg pr-2"></i> Acivity
												</label>
												<div class="form-group">
													<select
														class="form-control"
														name="activity"
														id=""
														onChange={this.handleChange}
													>
														<option>Working</option>
														<option>Unemployed</option>
													</select>
												</div>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													{' '}
													<i className="fa fa-birthday-cake fa-lg pr-2"></i> Age
												</label>
												<input
													type="text"
													name="age"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-list fa-lg pr-2"></i> Guarantee
												</label>
												<div class="form-group">
													<select
														class="form-control"
														name="guarentee"
														onChange={this.handleChange}
														id=""
													>
														<option>Working</option>
														<option>Unemployed</option>
													</select>
												</div>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													{' '}
													<i className="fa fa-list-ol fa-lg pr-2"></i> Mutual
												</label>
												<input
													type="text"
													name="mutual"
													id=""
													class="form-control"
													placeholder=""
													aria-describedby="helpId"
													onChange={this.handleChange}
												/>
												<small id="helpId" class="text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-bank fa-lg pr-2"></i> Bank
												</label>
												<div class="form-group">
													<select
														class="form-control"
														name="bank"
														id=""
														onChange={this.handleChange}
													>
														<option>Working</option>
														<option>Unemployed</option>
													</select>
												</div>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="" class="font-weight-bold text-primary">
													<i className="fa fa-check fa-lg pr-2"></i> Availability
												</label>
												<div class="form-group">
													<select
														class="form-control"
														name="availability"
														id=""
														onChange={this.handleChange}
													>
														<option value="oui">Available</option>
														<option value="non">Unavailable</option>
													</select>
												</div>
												<small id="emailHelpId" class="form-text text-muted">
													Help text
												</small>
											</div>
										</div>
									</div>
									<div>
										<hr />
										<div class="row">
											<div class="col-md-6 d-flex justify-content-start pl-3">
												<button
													type="button"
													name=""
													id=""
													class="btn btn-danger font-weight-bold w-25 btn-lg"
												>
													<i className="fa fa-refresh pr-2"></i> Reset
												</button>
											</div>
											<div class="col-md-6 d-flex justify-content-end pr-3">
												<button
													type="button"
													name=""
													id=""
													class="btn btn-success font-weight-bold w-25 btn-lg"
													onClick={this.handleSubmit}
												>
													<i className="fa fa-send pr-2"></i> Submit
												</button>
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
