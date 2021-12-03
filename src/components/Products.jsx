import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import actions from '../actions';
import '../styles/components/Products.styl';
import Product from './Product';
import AppContext from '../context/AppContext';

const Products = () => {
  // const { products } = props;
  const { products } = useContext(AppContext);

  const handleAddToCart = product => () => {
    // props.addToCart(product);
    console.log((product));
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

// const mapDispatchToProps = {
//   addToCart: actions.addToCart,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Products);
