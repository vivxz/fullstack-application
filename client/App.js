import React from 'react';
import List from './List.js';
import Form from './Form.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.addOrders = this.addOrders.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.submitNewOrder = this.submitNewOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    axios
      .get('/api/order')
      .then((data) => this.setState({
        orders: data.data
      }, () => console.log(this.state.orders)))
      .catch((err) => console.log(err));
  }

  // addOrders(data) {
  //   const currentOrder = this.state.orders.slice();
  //   currentOrder.push(data);
  //   this.setState({
  //     orders: currentOrder
  //   })
  // }

  submitNewOrder({ userName, foodItem, restaurant }) {
    axios
      .post('/api/order', { userName, foodItem, restaurant })
      .then((data) => {
        this.getOrders();
      })
      .catch((err) => console.log(err));
  }

  deleteOrder(_id) {
    axios
      .delete(`/api/order/${_id}`)
      .then((data) => {
        this.getOrders();
        console.log(data.data);
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <Form submitNewOrder={this.submitNewOrder} orders={this.state.orders} />
        <List orders={this.state.orders} deleteOrder={this.deleteOrder} />
      </div>
    )
  }
}

export default App