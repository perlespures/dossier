import React, { Component } from 'react';
import { connect } from 'react-redux';
import LastDateClicked from '../../components/LastDateClicked';
class Last extends Component {
  render() {
    return (
        <LastDateClicked value={this.props.lastClickDate} />
    )
  }
}

const  mapStateToProps = state => {
    return {
        lastClickDate: state.ctr.lastClickDate
    }

};
export default connect(mapStateToProps, null)(Last);