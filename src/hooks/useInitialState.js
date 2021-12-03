import { useState, useEffect } from 'react';
import axios from 'axios';

//API
const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios(API);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
  };
};

export default useInitialState;
