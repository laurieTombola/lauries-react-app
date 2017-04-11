var React = require('react'),
    Button = require('react-bootstrap/lib/Button'),
    PropTypes = require('prop-types');

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            price: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(property, event) {
        var newState = {};

        newState[property] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="number" value={this.state.id} onChange={this.handleChange.bind(null, 'id')}/></td>
                        <td><input type="text" value={this.state.name} onChange={this.handleChange.bind(null, 'name')}/></td>
                        <td><input type="number" value={this.state.price} onChange={this.handleChange.bind(null, 'price')}/></td>
                    </tr>
                    </tbody>
                </table>
                <Button onClick={this.props.onAdd.bind(null, this.state.id, this.state.name, this.state.price)}>Submit New Product</Button>
            </div>
        )
    }
}

module.exports = AddProduct;