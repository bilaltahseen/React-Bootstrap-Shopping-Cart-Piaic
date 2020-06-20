import React from 'react';
import cartIcon from '../assets/images/cart.svg';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Navbar
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link to='/cart' className='nav-link'>
              Cart &nbsp;
              <span>
                <img
                  alt={Math.random().toString()}
                  width='20px'
                  height='20px'
                  src={cartIcon}
                ></img>
              </span>
              &nbsp;
              <strong>
                <span>({props.cartItems.length})</span>
              </strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};
export default connect(mapStateToProps, null)(withRouter(Navigation));
