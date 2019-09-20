import React, { Component } from 'react';
import { connect } from 'react-redux';
import LastComposant from '../../components/LastComposant';

 class Last2 extends Component {
  render() {
    return (
      <LastComposant/>
    )
  }
}
const  mapStateToProps = state => {
    return {
        LastComposant: state.ctr.lastClickDate
    }

};


export default connect (mapStateToProps, null)(Last2);