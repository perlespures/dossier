import React, { Component } from 'react';
import ConfirmationPage from './containers/ConfirmationPage/ConfirmationPage';
// import Counter from './containers/Counter/Counter';
// import RootMenu from './containers/RootMenu/RootMenu';
// import ProductImages from './containers/ProductPage/ProductImages';
// import ProductDescription from './containers/ProductPage/ProductDescription';
// import ProductDetails from './containers/ProductPage/ProductDetails';
// import ProductComments from './containers/ProductPage/ProductComments';
// import PushProduct from './containers/ProductPage/PushProduct';





import './App.css';

class App extends Component {
  
  
  render() {
    
    return (
      <div className="App">
       {/* <Last /> */}
       {/* <RootMenu /> */}
       {/* <Counter /> */}
       {/* <ProductImages />  */}
       {/* <ProductDescription />   */}
       {/* <ProductDetails />  */}
       {/* <ProductComments />   */}
       {/* <PushProduct />   */}
       <ConfirmationPage /> 
       
      </div>
    );
  }
}

export default App;
