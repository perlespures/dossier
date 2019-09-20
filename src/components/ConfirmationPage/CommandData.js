import React from 'react';

const CommandData = (props) => {
  return (
    <div>
      <h1> { props.commandData.paymentDate } </h1>
      <ul>
        <li>{ props.commandData.shipement.place }</li>
        <li>{ props.commandData.shipement.time }</li>
      </ul> 
      <h1> { props.commandData.totalQuantity  } </h1>
      <h1> { props.commandData.totalPrice  } </h1>
    </div>
  )
}

export default CommandData;
