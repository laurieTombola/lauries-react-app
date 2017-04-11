var React = require('react'),
    Button = require('react-bootstrap/lib/Button'),
    Form = require('react-bootstrap/lib/Form'),
    FormControl = require('react-bootstrap/lib/FormControl'),
    ControlLabel = require('react-bootstrap/lib/ControlLabel'),
    FormGroup = require('react-bootstrap/lib/FormGroup'),
    Col = require('react-bootstrap/lib/Col');

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validUsers: [
                {
                    email: '1@1',
                    password: '1'
                },
                {
                    email: 'laurie.athey@outlook.com',
                    password: 'employee_of_the_year'
                },
                {
                    email: 'laurie.earned.this.job@zonal.com',
                    password: 'YouKnowItsTrue!'
                },
                {
                    email: 'something.witty@my.future.employer.com',
                    password: 'hire_me_if_you_grinned!'
                }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var newState = {};

        newState[event.target.type] = event.target.value;
        console.log(newState)
        this.setState(newState, function () {console.log(this.state)}.bind(this));
    }

    handleSubmit (e) {
        e.preventDefault();
        var credentialsValid = this.state.validUsers.filter(function (user) {
            return user.email === this.state.email && user.password === this.state.password;
        }).length > 0;

        if (credentialsValid) {
            this.props.history.push('/products')
        }
    }

    render() {
        return (
            <div className="login-container">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <h2>Please Sign In</h2>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Username" value={this.state.email} onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

module.exports = Login;