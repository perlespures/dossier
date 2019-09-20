import React from 'react';

import './MenuItem.css'; 

const MenuItem = (props) =>{
  let cssClassLi = "nav-item " + (props.cssClassComplement?props.cssClassComplement:" ")
  let disabledResult = props.name === "Disabled"?"disabled":" "
  let dropdownResult = props.name === "Dropdown"?"dropdown-toggle":" "
  let cssClassa = "nav-link " + disabledResult + dropdownResult
  let testDropdown = props.name === "Dropdown"?true:false
  let testDisabled = props.name === "Disabled"?true:false
  return( 
        <li className = {cssClassLi}>
          <a className= {cssClassa} href="#" {...(testDropdown ? {id:'navbarDropdown', role:'button', "data-toggle":'dropdown', "aria-haspopup":'true', "aria-expanded":'false'} : {})}{ ...(testDisabled ?{tabIndex:"-1" , "aria-disabled":"true"} : {})}>
              {props.name}
              {props.name === "Home"?props.children:null}
          </a>
          {props.name === "Dropdown"?props.children:null}  
        </li>
  
  )

}

export default MenuItem;