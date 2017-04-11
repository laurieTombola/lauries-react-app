var React = require('react'),
    Button = require('react-bootstrap/lib/Button'),
    ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar'),
    AddProduct = require('./add-product'),
    Product = require('./product');

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddProduct: false,
            products: [
                {
                    id: 1,
                    name: 'foo',
                    price: 100
                },
                {
                    id: 2,
                    name: 'bar',
                    price: 100
                }
            ]
        };

        //binding the functions so they can be seamlessly used as callbacks by child components (Product)
        this.removeHandler = this.removeHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.toggleShowAddProduct = this.toggleShowAddProduct.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.editProduct = this.editHandler.bind(this);
    }

    removeHandler(index) {
        console.log(index)
        this.setState(function () {
            this.state.products.splice(index, 1);
            return {
                products: this.state.products
            }
        })
    }

    editHandler(index, newId, newName, newPrice) {
        console.log('lolers')
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
                <ButtonToolbar>
                    <Button className="btn btn-large btn-success logout-button"
                            onClick={this.toggleShowAddProduct}>
                        Add
                    </Button>
                    <Button className="btn btn-large btn-danger logout-button " to="/">Logout</Button>
                </ButtonToolbar>
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