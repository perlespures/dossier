import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProduitSimilaire from '../../components/ProductPage/ProduitSimilaire';

 class PushProduct extends Component {
  render() {
    return (
      <div>
        <ProduitSimilaire ImgProduitSimilaire={this.props.ImgProduitSimilaire}/>
        <h1> { this.props.NomProduitSimilaire } </h1>
        <h1> { this.props.PrixProduitSimilaire } </h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      ImgProduitSimilaire: state.product.ImgProduitSimilaire,
      NomProduitSimilaire: state.product.NomProduitSimilaire,
      PrixProduitSimilaire: state.product.PrixProduitSimilaire,
    }
  };
export default connect(mapStateToProps, null)(PushProduct);