import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      foodItem: '',
      restaurant: ''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  handleSubmit(e) {
    let { userName, foodItem, restaurant } = this.state;
    e.preventDefault();
    axios
    for (var i = 0; i < this.props.orders.length; i++) {
      if (this.props.orders[i].userName) {
        console.log('EXIST, LETS UPDATE');
        return;
      }
    }
    this.props.submitNewOrder({ userName, foodItem, restaurant })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
              <input name="userName" type="text" placeholder="Username" onChange={this.onChangeInput} />
          </label>
          <br />
          <label>Food Items:
              <input name="foodItem" type="text" placeholder="Food Item" onChange={this.onChangeInput} />
          </label>
          <br />
          <label>Restaurants:
              <input name="restaurant" type="text" placeholder="Restaurant Name" onChange={this.onChangeInput} />
          </label>
          <button>Submit</button>
        </form>
      </div >
    )
  }
}

export default Form;