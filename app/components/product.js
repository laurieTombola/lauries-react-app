var React = require('react'),
    Button = require('react-bootstrap/lib/Button'),
    PropTypes = require('prop-types');

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            price: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.editRow = this.editRow.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    handleChange(property, event) {
        var newState = {};

        newState[property] = event.target.value;
        this.setState(newState);
    }

    editRow () {
        this.setState({
            editing: true
        });
    }

    cancelEdit () {
        this.setState({
            editing: false
        });
    }

    render() {
        var editing = this.state.editing;

        return !editing ?
            <ProductRow product={this.props.product} removeHandler={this.props.removeHandler} editRow={this.editRow}/> :
            <EditRow product={this.props.product} editHandler={this.props.editHandler} cancelHandler={this.cancelEdit} />
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
};

function ProductRow(props) {
    return (
        <tr>
            <td>{props.product.id}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>
                <Button className="btn btn-info"
                        onClick={props.editRow}>
                    Edit
                </Button>
            </td>
            <td>
                <Button className="btn btn-danger"
                        onClick={props.removeHandler.bind(null, props.product.key)}>
                    Remove
                </Button>
            </td>
        </tr>
    )
}

class EditRow extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            id: props.product.id,
            name: props.product.name,
            price: props.product.price
        };

        this.handleChange = this.handleChange.bind(this);
        this.finishEditing = this.finishEditing.bind(this);
    }

    handleChange(property, event) {
        var newState = {};

        newState[property] = event.target.value;
        this.setState(newState);
    }

    finishEditing () {
        this.props.editHandler(this.props.product.key, this.state.id, this.state.name, this.state.price);
        this.props.cancelHandler();
    }

    render () {
        return (
            <tr>
                <td>
                    <input type="number" value={this.state.id} onChange={this.handleChange.bind(null, 'id')}/>
                </td>
                <td>
                    <input type="text" value={this.state.name} onChange={this.handleChange.bind(null, 'name')}/>
                </td>
                <td>
                    <input type="number" value={this.state.price} onChange={this.handleChange.bind(null, 'price')}/>
                </td>
                <td>
                    <Button onClick={this.finishEditing}>Confirm</Button>
                </td>
                <td>
                    <Button onClick={this.props.cancelHandler}>Cancel</Button>
                </td>
            </tr>
        )
    }
}


module.exports = Product;

/* <tr>
 <td>{this.props.product.id}</td>
 <td>{this.props.product.name}</td>
 <td>{this.props.product.price}</td>
 <td><Button className="" onClick={console.log.bind(null, 'edit')}>Edit</Button></td>
 <td><Button className=""
 onClick={this.props.removeHandler.bind(null, this.props.product.key)}>Remove</Button></td>
 </tr>*/