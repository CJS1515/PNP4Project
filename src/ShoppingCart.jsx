import react, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    console.log("constructor - ShoppingCart");
    super(props); //calling super class' constructor
    //initializing the state
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
        { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
        { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
        { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
        { id: 5, productName: "Xbox 360", price: 300, quantity: 0 },
        { id: 6, productName: "MSI Laptop", price: 9999, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render - ShoppingCart");

    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  componentDidMount() {
    //fetch data from data source
    console.log("componentDidMount - ShoppingCart");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate - ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    console.log("componentWillUnmount - ShoppingCart");
    console.log(error, info);

    localStorage.lastError = `${error}\n${info}`;
  }

  handleIncrement = (product, maxValue) => {
    //console.log("handleIncrement", product);

    //get index of current product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    //console.log("handleDecrement", product);

    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  //executes delete when little x is pressed
  handleDelete = (product) => {
    //get index of product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are You Sure You Want To Delete")) {
      //delete product based on index
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
