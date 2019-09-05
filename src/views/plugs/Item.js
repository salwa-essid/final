import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ItemPlug extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggleFade = this.toggleFade.bind(this);
		this.state = {
			collapse: true,
			fadeIn: true,
			timeout: 300,
		};
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	toggleFade() {
		this.setState(prevState => {
			return { fadeIn: !prevState };
		});
	}

	deleteplug = () => {
		let token = localStorage.getItem('token');
		if (!token) {
			token = '';
		}
		const { item } = this.props;
		axios
			.delete(`http://127.0.0.1:5001/plug/${item.id}`, {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			})
			.then(() => this.props.deletePlugReducer(item.id))
			.catch(err => alert(err));
	};

	render() {
		const { item } = this.props;
		return (
			<tr>
				<td>
					{item.firstname} {item.lastname}
				</td>
				<td>{item.email}</td>
				<td>{item.phone}</td>
				<td>{item.mobile}</td>
				<td>{item.city}</td>
				<td>{item.availability}</td>
				<td>
					<div className="row ">
						<Link to={`/plug/info/${item.id}`}>
							<div name="col-xs-4 col-md-3 d-flex justify-content-end">
								<i className="fa fa-info-circle t-green fa-lg" onClick={this.getPlug}></i>
							</div>
						</Link>
						<div className="col-xs-4 col-md-3 d-flex justify-content-center">
							<i className="fa fa-lock t-blue fa-lg"></i>
						</div>
						<div className="col-xs-4 col-md-3 d-flex justify-content-center">
							<i className="fa fa-trash t-red fa-lg" onClick={this.deleteplug}></i>
						</div>
						<Link to={`/plug/update/${item.id}`}>
							<div className="col-xs-4 col-md-3 d-flex  justify-content-start">
								<i className="fa fa-edit t-green fa-lg"></i>
							</div>
						</Link>
					</div>
				</td>
			</tr>

			//    </div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		deletePlugReducer: id => {
			dispatch({
				type: 'REMOVE_PLUG',
				id,
			});
		},
	};
};
export default connect(
	null,
	mapDispatchToProps
)(ItemPlug);
