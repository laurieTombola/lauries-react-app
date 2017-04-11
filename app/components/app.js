var React = require('react'),
    ReactRouter = require('react-router-dom'),
    Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,

    Products = require('./products'),
    Login = require('./login');

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userAuthenticated: false
        };

        this.authUser = this.authUser.bind(this);
    }

    authUser (login) {
        this.setState({
            userAuthenticated: login
        })
    }

    createLoginTag (props) {
        return (
            <Login authUser={this.authUser} userAuthenticated={this.state.userAuthenticated} history={props.history}/>
        )
    }

    createProductsTag (props) {
        return (
            <Products authUser={this.authUser} userAuthenticated={this.state.userAuthenticated} history={props.history}/>
        )
    }

    render() {
        return (
        <Router history={hashHistory}>
            <div className="container">
                <Route exact path="/" component={this.createLoginTag.bind(this)}/>
                <Route path="/products" component={this.createProductsTag.bind(this)}/>
            </div>
        </Router>
        )
    }
};

module.exports = App;