import React from 'react';

const ImagesList = (props) => {
  return ( 
    <div>
      <ul>
       {
         props.ImgsListSrc.map (currentElement => 
            ( 
            <li> <img src = {currentElement} alt="" /></li>
            )  
          )
       }
      </ul>
    </div>
  )
}

export default ImagesList;
