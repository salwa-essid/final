import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class ItemUser extends Component {
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
    deleteuser = () => {
        const { item } = this.props
        axios.delete(`http://127.0.0.1:5001/user/${item.id}`)
            .then(() => this.props.deleteUserReducer(item.id))
            .catch((err) => alert(err))
    }

    render() {
        const { item } = this.props
        return (
            <tr>
                <td >{item.username} {item.lastname}</td>
                <td >{item.email}</td>
                <td >{item.phone}</td>
                <td >{item.numero}</td>
                <td >
                    <div class="row">
                        <div class="col-xs-4 col-md-4 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getUser}></i>
                        </div>
                        <div class="col-xs-4 col-md-4 d-flex justify-content-center">
                            <i className="fa fa-lock t-blue fa-lg"></i>
                        </div>
                        <div class="col-xs-4 col-md-4 d-flex justify-content-start">
                            <i className="fa fa-trash t-red fa-lg" onClick={this.deleteuser} ></i>
                        </div>
                    </div>
                </td>
            </tr>

            //    </div>                                 
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserReducer: id => {
            dispatch({
                type: 'REMOVE_USER',
                id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemUser);