import React, { Component } from 'react';
import CommentList from '../../components/ProductPage/CommentList';
import {connect} from 'react-redux';

 class ProductComments extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <CommentList CommentList={this.props.CommentList}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        CommentList: state.product.CommentList,
    }
  };
export default connect(mapStateToProps, null)(ProductComments);