import React, { Component } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
} from 'reactstrap';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
			email: '',
			password: '',
		};
	}

	handleChange = e => {
		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}

		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}
	};

	login = () => {
		if (this.state.email === '' || this.state.password === '') {
			ToastsStore.error('Enter password and email');
		} else {
			axios
				.post('http://127.0.0.1:5001/auth/user/login', {
					email: this.state.email,
					password: this.state.password,
				})
				.then(success => {
					if (success.data.error === '') {
						localStorage.setItem('token', success.data.data.data);
						var payload = JwtDecode(success.data.data.data);
						if (payload.role) {
							if (payload.role === 'USER') {
								this.props.history.push('/plug/list');
							}
						} else {
							localStorage.removeItem('token');
						}
					} else {
						ToastsStore.error(success.data.error);
					}
				})
				.catch(error => {
					ToastsStore.error(error.data.error);
				});
		}
	};
	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<ToastsContainer store={ToastsStore} />
					<Row className="justify-content-center">
						<Col md="8">
							<CardGroup>
								<Card className="p-4">
									<CardBody>
										<Form>
											<h1>Login</h1>
											<p className="text-muted">Sign In to your account</p>
											<InputGroup className="mb-3">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="icon-user"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="text"
													placeholder="Email"
													autoComplete="off"
													name="email"
													onChange={this.handleChange}
												/>
											</InputGroup>
											<InputGroup className="mb-4">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="icon-lock"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input
													type="password"
													placeholder="Password"
													autoComplete="current-off"
													name="password"
													onChange={this.handleChange}
												/>
											</InputGroup>
											<Row>
												<Col xs="6">
													<Button color="primary" className="px-4" onClick={this.login}>
														Login
													</Button>
												</Col>
												<Col xs="6" className="text-right">
													<Button color="link" className="px-0">
														Forgot password?
													</Button>
												</Col>
											</Row>
										</Form>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Login;
