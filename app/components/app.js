var React = require('react'),
    ReactRouter = require('react-router-dom'),
    Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,

    Products = require('./products'),
    Login = require('./login');

class App extends React.Component {
    render() {
        console.log(hashHistory)
        return (
        <Router history={hashHistory}>
            <div className="container">
                <Route exact path="/" component={Login}/>
                <Route path="/products" component={Products}/>
            </div>
        </Router>
        )
    }
};

module.exports = App;