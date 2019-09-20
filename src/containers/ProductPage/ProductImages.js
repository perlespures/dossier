import React, { Component } from 'react';
import MainImage from '../../components/ProductPage/MainImage';
import ImagesList from '../../components/ProductPage/ImagesList';
import {connect} from 'react-redux';

 class ProductImages extends Component {
  render() {
    return (
      <div>
        <MainImage ImgSrc={this.props.mainImageSrc}/>
        <ImagesList ImgsListSrc={this.props.imagesListSrc}/> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mainImageSrc: state.product.MainImage,
    imagesListSrc: state.product.ImagesList 
    
  }
};



export default connect(mapStateToProps, null)(ProductImages);
