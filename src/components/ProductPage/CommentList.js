import React from 'react';

const CommentList = (props) => {
  console.log(props)
  return (
    <div>
      <ul>
        {
          props.commentList.map (currentElement => 
            ( 
              <li> 
                <p>{currentElement.Person}</p>
                <p>{currentElement.Avis}</p>
                <p>{currentElement.Date}</p>
              </li>
            )  
          )
        }
     </ul>
    </div>
  )
}

export default CommentList;
