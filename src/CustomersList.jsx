import { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Steve",
        phone: "123-456",
        address: { city: "Dayton" },
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: 2,
        name: "John",
        phone: "957-456",
        address: { city: "Miami" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 3,
        name: "Bob",
        phone: null,
        address: { city: "Orlando" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 4,
        name: "Tim",
        phone: "725-270",
        address: { city: "Tampa" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 5,
        name: "Jill",
        phone: "731-009",
        address: { city: "Cleveland" },
        photo: "https://picsum.photos/id/1013/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thread>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thread>
          <tbody>{this.getCustomerrow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerrow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    this.setState({ customers: custArr });
  };
}
