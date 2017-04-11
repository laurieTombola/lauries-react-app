var React = require('react'),
    Button = require('react-bootstrap/lib/Button'),
    ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

class ProductsButtonBar extends React.Component {
    constructor (props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout (e) {
        e.preventDefault();
        console.log(this.props)
        this.props.history.push('/');
    }

    render () {
        return (
            <ButtonToolbar>
                <Button className="btn btn-large btn-success logout-button"
                        onClick={this.props.addHandler}>
                    Add
                </Button>
                <Button className="btn btn-large btn-danger logout-button" onClick={this.handleLogout}>Logout</Button>
            </ButtonToolbar>
        )
    }
}

module.exports = ProductsButtonBar;