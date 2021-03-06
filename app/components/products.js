var React = require('react'),
    AddProduct = require('./add-product'),
    ButtonBar = require('./products-button-bar'),
    Product = require('./product');

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddProduct: false,
            products: [
                { id: 1, name: 'Play System 4 Pro', price: 348.99 },
                { id: 2, name: 'Y Box 720', price: 218.99 },
                { id: 3, name: 'uPhone 27', price: 12345221.99 },
                { id: 4, name: 'Sungsam Universe T20', price: 149.99 },
                { id: 5, name: 'foo', price: 100 },
                { id: 6, name: 'bar', price: 100 },
                { id: 7, name: 'baz', price: 100 },
                { id: 8, name: 'qux', price: 100 },
                { id: 9, name: 'quux', price: 100 },
                { id: 10, name: 'corge', price: 100 },
                { id: 11, name: 'grault', price: 100 },
                { id: 12, name: 'garply', price: 100 },
                { id: 13, name: 'waldo', price: 100 },
                { id: 14, name: 'fred', price: 100 },
                { id: 15, name: 'plugh', price: 100 },
                { id: 16, name: 'xyzzy', price: 100 },
                { id: 17, name: 'Clyde', price: 100 },
                { id: 18, name: 'Blinky', price: 100 },
                { id: 19, name: 'Pinky', price: 100 },
                { id: 20, name: 'Inky', price: 100 },
            ]
        };

        //binding the functions so they can be seamlessly used as callbacks by child components (Product)
        // for reasons behind that see https://online.reacttraining.com/courses/enrolled/50507
        this.removeHandler = this.removeHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.toggleShowAddProduct = this.toggleShowAddProduct.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.editProduct = this.editHandler.bind(this);
    }

    componentWillMount () {
        if (!this.props.userAuthenticated) {
            this.props.history.push('/');
        }
    }

    removeHandler(index) {
        this.setState(function () {
            this.state.products.splice(index, 1);
            return {
                products: this.state.products
            }
        })
    }

    editHandler(index, newId, newName, newPrice) {
        this.setState(function () {
            this.state.products[index] = {
                id: newId,
                name: newName,
                price: newPrice
            }
        }.bind(this))
    }

    toggleShowAddProduct() {
        this.setState({
            showAddProduct: !this.state.showAddProduct
        });
    }

    addNewProduct(id, name, price) {
        this.setState(function () {
            this.state.products[this.state.products.length] = {
                id: id,
                name: name,
                price: price
            };
            return {
                products: this.state.products
            }
        })

        this.toggleShowAddProduct();
    }

    editProduct(index, editedProduct) {
        this.setState(function () {
            this.state.products[index] = editedProduct;
            return this.state;
        })
    }

    render() {
        var showAddProduct = this.state.showAddProduct;

        return (
            <div className="products-container">
                <h2>Products</h2>
                <ButtonBar history={this.props.history} authUser={this.props.authUser} addHandler={this.toggleShowAddProduct}/>
                <br/>
                {showAddProduct && <AddProduct onAdd={this.addNewProduct}/>}
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Edit</td>
                        <td>Remove</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.products.map(function (product, index) {
                            product.key = index; //used for removing specific rows later
                            return <Product key={product.key}
                                            product={product}
                                            removeHandler={this.removeHandler}
                                            editHandler={this.editHandler}
                                            editProduct={this.editProduct}
                            />
                        }.bind(this))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = Products;