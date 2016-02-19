import React, { Component } from 'react';

class TeaDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantitySelected: 0
        }

        this.onAddClick = this.onAddClick.bind(this);
    }

    renderOptions() {
        let optionArray = [];
        for (var i = 0; i < 10; i++) {
            optionArray.push(
                <option value={i} key={i}>{i}</option>
            );
        }
        return optionArray;
    }

    renderDetails() {
        const { tea } = this.props

        return (
            <h3>{tea.name}
                <span className="pull-right">
                    Quantity:
                    <select
                        className="form-control"
                        defaultValue={this.state.quantitySelected}
                        value={this.state.quantitySelected}
                        onChange={e => this.setState({ quantitySelected: e.target.value })}>
                        {this.renderOptions()}
                    </select>
                    <button
                        type="button"
                        name="button"
                        className="btn btn-warning"
                        onClick={this.onAddClick}>
                        Add To Bag
                    </button>
                </span>
            </h3>
        );
    }

    onAddClick() {
        this.props.onAddClick(this.props.tea, this.state.quantitySelected);
        this.setState({ quantitySelected: 0 });
    }


    render() {
        const { tea } = this.props;

        return (
            <tr>
                <td>
                    <img src={tea.imageUrl} />
                </td>
                <td>
                    {this.renderDetails()}
                </td>
            </tr>
        );
    }
}

export default TeaDetail;
