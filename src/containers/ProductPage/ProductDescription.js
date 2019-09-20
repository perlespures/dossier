import React, { Component } from 'react'
import {connect} from 'react-redux';
import Livraison  from '../../components/ProductPage/Livraison';
import Rating  from '../../components/ProductPage/Rating';
import ListCaraImg  from '../../components/ProductPage/ListCaraImg';



 class ProductDescription extends Component {
  render() {
    let  Disponibilite = this.props.Disponibilite
    return (
      <div>
        <h1> { this.props.Nom } </h1>
        <h1> { this.props.Prix } </h1>
        <h1> { this.props.Reduction } </h1>
        
        <div> 
          {
            Disponibilite ? 
              ( 
              <h1> Disponible </h1>  
              ) :
              ( 
              <h1> Indisponible </h1>  
              )
          } 
        </div> 
        
        
        <Livraison Livraison={this.props.Livraison}/>
        <Rating Rating={this.props.Rating}/> 
        <ListCaraImg ListCaraImg1={this.props.ListCaraImg}/>
        


      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      Nom: state.product.Nom,
      Prix: state.product.Prix,
      Reduction: state.product.Reduction,
      Disponibilite: state.product.Disponibilite,
      Livraison: state.product.Livraison,
      Rating: state.product.Rating,
      ListCaraImg: state.product.ListCaraImg,
      
      
      
    }
  };

export default connect(mapStateToProps, null) (ProductDescription);