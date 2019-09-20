import React, { Component } from 'react'
import {connect} from 'react-redux';

import ClientData from '../../components/ConfirmationPage/ClientData';
import CommandData from '../../components/ConfirmationPage/CommandData';
import CommandItems from '../../components/ConfirmationPage/CommandItems';
import LegalMentions from '../../components/ConfirmationPage/LegalMentions';

 class ConfirmationPage extends Component {
  render() {
    return (
      <div>
        <ClientData clientData = {this.props.confirmationPageData.clientData} />
        <CommandData commandData = {this.props.confirmationPageData.commandData} />
        <CommandItems commandItems = {this.props.confirmationPageData.commandItems} />
        <LegalMentions legalMentions = {this.props.confirmationPageData.legalMentions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
   return {
   confirmationPageData: state.product.confirmationPageData,
  
  }

}

export default connect (mapStateToProps, null) (ConfirmationPage);

