import React from 'react';

const Livraison = (props) => {

  return ( 
    <div>
      <p >La livraison sera possible pendant {props.Livraison.Delai} sur {props.Livraison.Place} </p>
    </div>
  )
}

export default Livraison;
