import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  let totalPrices = [0];
  props.cartItems.forEach((elem) => totalPrices.push(elem.itemTotal));
  return (
    <div className='container-md '>
      {props.cartItems.map((elem) => {
        return (
          <div
            key={elem.itemId}
            className='row shadow-sm mt-5 d-flex align-items-center p-2'
          >
            <div className='col-1 col-xs-12 '>
              <img
                alt={Math.random().toString()}
                width='50px'
                height='50px'
                src={elem.itemImage}
              />
            </div>
            <div className='col-md-3 '>
              <p>{elem.itemName}</p>
            </div>
            <div className='col-md-3 '>
              <p>Quantity = {elem.itemQuantity} </p>
            </div>

            <div className='col-md-2 '>
              <p>
                Price = {elem.itemTotal / elem.itemQuantity} {'$'}
              </p>
            </div>
            <div className='col0-md-2 mb-3 pl-3'>
              <button
                onClick={() => props.removeCart(elem.itemId)}
                className='btn-sm badge-danger border-0 text-center rounded '
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      {props.cartItems.length > 0 ? (
        <div className='container mt-4 '>
          <h4>
            Total Cost =
            {totalPrices.reduce((total, num) => total + num).toFixed(2)} $
          </h4>
        </div>
      ) : (
        <div className='container mt-4 text-center '>
          <h4>Your Cart Is Empty</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (itemId) => dispatch({ type: 'REMOVE_CART', payload: itemId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
