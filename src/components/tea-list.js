import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeas } from '../actions/index';

import TeaDetail from './tea-detail';

class TeaList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkoutBag: [],
            success: false,
            failure: false
        };

        this.updateCheckoutBag = this.updateCheckoutBag.bind(this);
        this.invalidQuantity = this.invalidQuantity.bind(this);
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
                <TeaDetail
                    onAddClick={this.updateCheckoutBag}
                    invalidQuantity={this.invalidQuantity}
                    key={tea._id}
                    tea={tea}
                />
            );
        });
    }

    invalidQuantity() {
        this.setState({ failure: true });

        setTimeout(() => {
            this.setState({ failure: false });
        }, 3000)
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

    renderSuccessMessage() {
        return (
            <div className="alert alert-success">
                Success! Your item has been added to your cart!
            </div>
        );
    }

    renderFailureMessage() {
        return (
            <div className="alert alert-danger">
                Error!  Please pick a quanitty larger than 0.
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>Welcome to Tea Shopping Cart</h1>

                {this.state.success ? this.renderSuccessMessage() : null}
                {this.state.failure ? this.renderFailureMessage() : null}

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
