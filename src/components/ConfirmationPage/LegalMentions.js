import React from 'react';

const LegalMentions = (props) => {
  return (
    <div>
      <h1>{props.legalMentions.warranty}</h1> 
      <ul>
        {
         props.legalMentions.rembourcement.map (currentElement =>
           (
              <li>
                <p>{currentElement.productId}</p>
                <p>{currentElement.remoubrourcement}</p>
              </li>
            )
         )
        }
      </ul>
    </div>
  )
}

export default LegalMentions;

