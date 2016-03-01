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

    renderStats() {
        const { tea } = this.props;
        let id = 0;
        return [
            <p key={id++}><strong>Price:</strong> ${(tea.price / 100).toFixed(2)}</p>,
            <p key={id++}><strong>Caffiene Scale:</strong> {tea.caffeineScale}</p>,
            <p key={id++}><strong>Rating:</strong> {tea.rating} </p>,
            <p key={id++}><strong>In Stock?:</strong> {tea.inStock ? 'Yes' : 'No'}</p>,
            <div key={id++}><strong>Categories:</strong>
                <ul>
                    {this.renderCategories()}
                </ul>
            </div>
        ]
    }

    renderCategories() {
        let id = 0;
        return this.props.tea.categories.map((category) => {
            return <li key={id++}>{category}</li>
        });
    }

    renderDetails() {
        const { tea } = this.props

        return (
            <div>
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
                {this.renderStats()}
            </div>
        );
    }

    onAddClick() {
        if (this.state.quantitySelected) {
            this.props.onAddClick(this.props.tea, this.state.quantitySelected);
            this.setState({ quantitySelected: 0 });
        } else {
            this.props.invalidQuantity();
        }
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
