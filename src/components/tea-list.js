import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeas } from '../actions/index';

import TeaDetail from './tea-detail';

class TeaList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkoutBag: [],
            success: false
        };

        this.updateCheckoutBag = this.updateCheckoutBag.bind(this);
    }

    componentWillMount() {
        this.props.fetchTeas();
    }

    renderTeas() {
        if (!this.props.teas) {
            return <div>Loading...</div>
        }

        return this.props.teas.map((tea) => {
            return (
                <TeaDetail onAddClick={this.updateCheckoutBag} key={tea._id} tea={tea} />
            );
        });
    }

    updateCheckoutBag(tea, quantity) {
        this.setState({
            checkoutBag: this.state.checkoutBag.concat({ tea, quantity }),
            success: true
        });

        setTimeout(() => {
            this.setState({ success: false });
        }, 3000);
    }

    renderAlertMessage() {
        return (
            <div className="alert alert-success">
                Success! Your item has been added to your cart!
            </div>
        );
    }

    render() {
        console.log(this.props.teas);
        console.log(this.state);
        return (
            <div>
                <h1>Welcome to Tea Shopping Cart</h1>

                {this.state.success ? this.renderAlertMessage() : null}

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Tea</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTeas()}
                    </tbody>
                </table>
            </div>
        );
    }


}

function mapStateToProps(state) {
    return { teas: state.teas.all }
}

export default connect(mapStateToProps, { fetchTeas })(TeaList);
