import React, { Component } from 'react';

class Filter extends Component {
    constructor() {
        super(props)

        this.state = {
            selectedOption: null
        }
    }

    onOptionChange(e) {
        this.setState({ selectedOption: e.target.value });
    }

    renderOptions() {
        return this.props.options.map((option) => {
            return (
                <option
                    key={option}
                    value={option}
                    selected={(option.value === this.state.selectedOption)}
                    >
                    {option}
                </option>
            );
        });
    }

    render() {
        return (
            <select
                value={this.state.selectedOption}
                onChange={this.onOptionChange}
                >
                {this.renderOptions}
            </select>
        );
    }
}

export default Filter;
