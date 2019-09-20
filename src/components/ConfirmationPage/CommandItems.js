import React from 'react';

const CommandItems = (props) => {
  return (
    <div>
      <ul>
        {
         props.commandItems.map (currentElement =>
           (
              <li>
                <p>{currentElement.id}</p>
                <p>{currentElement.itemName}</p>
                <p>{currentElement.itemQuantity}</p>
                <p>{currentElement.itemPrice}</p>
                <p>{currentElement.discount}</p>
              </li>
            )
         )
        }
      </ul>
    </div>
  )
}

export default CommandItems;


