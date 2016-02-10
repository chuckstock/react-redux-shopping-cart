import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeas } from '../actions/index';
import axios from 'axios';

class TeaList extends Component {
    componentWillMount() {
        this.props.fetchTeas();
    }

    render() {
        console.log(this.props.teas);
        return (
            <div>
                <h1>Welcome to Tea Shopping Cart</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Tea</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        );
    }

    renderList() {
        return (
            <tr>
                <td>hi</td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { teas: state.teas.all }
}

export default connect(mapStateToProps, { fetchTeas })(TeaList);
