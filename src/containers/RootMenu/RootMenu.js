import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuItem from '../../components/MenuItem/MenuItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchButton from '../../components/SearchButton/SearchButton';


class RootMenu extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <ul className="navbar-nav mr-auto"> 
                        <MenuItem name="Home" cssClassComplement = "active" >
                            <span className="sr-only">(current)</span>
                        </MenuItem>
                        <MenuItem name="Link" />
                        <MenuItem name= "Dropdown" cssClassComplement = "dropdown">
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </MenuItem>
                        <MenuItem name="Disabled" /> 
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                            </div>
                    </ul> 
                    <form className="form-inline my-2 my-lg-0">
                        <SearchBar name= "SearchBar"/>
                        <SearchButton name= "SearchButton" /> 
                    </form>
                </div>
            </nav>
        );
    }
}

export default RootMenu;