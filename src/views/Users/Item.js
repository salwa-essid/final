import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

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
    deleteuser=()=>
    {  const {item} = this.props
    axios.delete(`http://127.0.0.1:5001/user/${item._id}`)   
  .then(()=>this.props.deleteUserReducer(item._id)) 
  .catch((err)=>alert(err)) 
    }
    render() {
        const {item}=this.props
        return (
            // <div className="animated fadeIn">
            
                <tr>
                    <td scope="row">{item.username}{item.lastname}</td>
                    <td scope="row">{item.email}</td>
                    <td scope="row">{item.phone}</td>
                    <td scope="row">{item.numero}</td>
                    <td scope="row">
                    <div class="row">
                        <div class="col-xs-4 col-md-4 d-flex justify-content-end">
                            <i className="fa fa-info-circle t-green fa-lg"></i>
                        </div>
                        <div class="col-xs-4 col-md-4 d-flex justify-content-center">
                            <i className="fa fa-lock t-blue fa-lg"></i>
                        </div>
                        <div class="col-xs-4 col-md-4 d-flex justify-content-start">
                            <i className="fa fa-trash t-red fa-lg"onClick={this.deleteuser}></i>
                        </div>
                    </div>
                    </td>
                </tr>
                
        //    </div>                                 
        );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteUserReducer:_id=>
        {
            dispatch({
                type:'REMOVE_USER',
                _id
            })
        }
    }
}
export default  connect(null,mapDispatchToProps)(ItemUser);