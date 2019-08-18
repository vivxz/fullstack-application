import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      < div >
        <p>Username: {this.props.order.userName}</p>
        <p>Food Item: {this.props.order.foodItem}</p>
        <p>Restaurant: {this.props.order.restaurant}</p>
        <button onClick={() => this.props.deleteOrder(this.props.order._id)}>Mark Complete!</button>
      </div >
    )
  }
}

export default ListEntry;