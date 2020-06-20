import React from 'react';
import { connect } from 'react-redux';
import cartIcon from '../assets/images/cart.svg';
const Card = (props) => {
  let [count, setCount] = React.useState(1);
  const [cartAdded, setCartAdded] = React.useState(false);

  const changeCount = (effect) => {
    if (count <= 9 && effect === '+') {
      setCount(++count);
    }
    if (count > 1 && effect === '-') {
      setCount(--count);
    }
  };
  const addToCartHandler = () => {
    const dataSchemea = {
      itemId: props.itemId,
      itemName: props.itemName,
      itemTotal: props.itemPrice * count,
      itemImage: props.itemImage,
      itemQuantity: count,
    };
    props.setCart(dataSchemea);
    setCartAdded(true);
  };
  const removeCardHandler = () => {
    props.removeCart(props.itemId);
    setCartAdded(false);
    setCount(0);
  };
  React.useEffect(() => {
    let ids = [];
    props.cartItems.forEach((elem) => ids.push(elem.itemId));
    if (ids.includes(props.itemId)) return setCartAdded(true);
  }, [props.cartItems, props.itemId]);
  return (
    <div>
      <div className='card relative'>
        <img
          className='card-img-fluid'
          width='200px'
          height='200px'
          src={props.itemImage}
          alt={Math.random().toString()}
        />
        {cartAdded ? (
          <span
            className='badge badge-pill badge-success position-absolute'
            style={{ right: 5, padding: 10, top: 5 }}
          >
            <img
              alt={Math.random().toString()}
              width='20px'
              style={{ filter: 'invert()' }}
              height='20px'
              src={cartIcon}
            ></img>
          </span>
        ) : (
          ''
        )}
        <div className='card-body'>
          <h4 className='card-title'>{props.itemName}</h4>
          <p className='card-text'>{props.itemDetails}</p>
          <div className='row'>
            <div
              className={
                cartAdded
                  ? 'col-5 d-flex align-items-center'
                  : 'col-4 d-flex align-items-center'
              }
            >
              <div
                style={{ fontSize: '12px' }}
                onClick={cartAdded ? removeCardHandler : addToCartHandler}
                className={cartAdded ? 'btn btn-danger' : 'btn btn-success'}
              >
                {cartAdded ? 'Remove from Cart' : 'Add to Cart'}
              </div>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-between'>
              <button
                disabled={cartAdded}
                onClick={() => changeCount('+')}
                className={
                  cartAdded
                    ? 'border-0 rounded my-count-disabled'
                    : 'border-0 rounded my-count bg-transparent'
                }
              >
                +
              </button>
              <span>
                <strong>{count}</strong>
              </span>
              <button
                disabled={cartAdded}
                onClick={() => changeCount('-')}
                className={
                  cartAdded
                    ? 'border-0 rounded my-count-disabled'
                    : 'border-0 rounded my-count bg-transparent'
                }
              >
                −
              </button>
            </div>
            <div className='col-3 d-flex align-items-center ml-auto'>
              <strong>$ {props.itemPrice}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (items) => dispatch({ type: 'SET_CART', payload: items }),
    removeCart: (itemId) => dispatch({ type: 'REMOVE_CART', payload: itemId }),
  };
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
