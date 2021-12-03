import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const { products } = useInitialState();

  return (
    <>
      {
        products.length ?
          (
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/checkout" element={<Checkout />} />
                  <Route element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          ) :
          (
            <h1>Loading...</h1>
          )

      }
    </>

  );
};

export default App;
