import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class ItemAdmin extends Component {
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

    deleteadmin = () => {
        const { item } = this.props
        axios.delete(`http://127.0.0.1:5001/admin/${item.id}`)
            .then(() => this.props.deleteAdminReducer(item.id))
            .catch((err) => alert(err))
    }

    render() {
        const { item } = this.props
        return (
            <tr>
                <td >{item.adminname} {item.lastname}</td>
                <td >{item.email}</td>
                <td >{item.phone}</td>
                <td >{item.numero}</td>
                <td >
                    <div className="row ">
                    <Link to={`/admin/info/${item.id}`}>
                        <div name="col-xs-4 col-md-3 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg" onClick={this.getAdmin}></i>
                        </div>
                        </Link>
                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-lock t-blue fa-lg" ></i>
                        </div>
                        <div className="col-xs-4 col-md-3 d-flex justify-content-center">
                            <i className="fa fa-trash t-red fa-lg" onClick={this.deleteadmin} ></i>
                        </div>
                        <Link to={`/admin/update/${item.id}`}>
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
const mapDispatchToProps = (dispatch) => {
    return {
        deleteAdminReducer: id => {
            dispatch({
                type: 'REMOVE_ADMIN',
                id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ItemAdmin);