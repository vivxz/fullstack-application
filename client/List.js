import React from 'react';
import ListEntry from './ListEntry.js';

const List = (props) => {
  return (
    <div className="container">
      <ul>
        {props.orders.map((order, i) => {
          return <ListEntry order={order} key={i} deleteOrder={props.deleteOrder} />
        })}
      </ul>
    </div>
  )
}

export default List;