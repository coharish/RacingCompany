// React imports
import React, { useContext, useEffect } from 'react';
import GlobalContext, { GlobalContextType } from '../../context/Provider';
import getcart from '../../context/actions/getcart';

// App imports
const { cartState, cartDispatch } =
  useContext<GlobalContextType>(GlobalContext);

useEffect(() => {
  if (!cartState.cart.loading && !cartState.cart.data.length) {
    getcart(cartDispatch);
  }
}, [cartState, cartDispatch]);

const Home = () => {
  return <div>Home</div>;
};

export default Home;
