import React from 'react';

const ClientData = (props) => {
  return (
    <div>
          <h1> {props.clientData.nom} </h1>
          <h1> {props.clientData.email} </h1>
          <h1> {props.clientData.mobile} </h1>
           
    </div>
  )
}

export default ClientData;

