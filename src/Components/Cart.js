import { Link } from 'react-router-dom';
import CartItem from '../Utils/CartItem';
import { nanoid } from 'nanoid';
import SalesOff from '../Assets/SalesAndCoupons/SalesOff';

function Cart({ cart, setCart }) {
  const cartArray = cart.map((item) => (
    <CartItem
      key={nanoid()}
      id={item.id}
      image={item.images[0]}
      name={item.name}
      price={item.price}
      path={item.path}
      size={item.selectedSize}
      quantity={item.quantity}
      item={item}
      cart={cart}
      setCart={setCart}
      inStock={item.inStock}
    />
  ));

  function sum() {
    const priceArray = cart.map((item) => item.price * item.quantity);
    let sum = 0;
    for (let i = 0; i < priceArray.length; i++) {
      sum += priceArray[i];
    }
    return sum;
  }

  function subtotal() {
    if (SalesOff) {
      return (sum() - discountAmount()).toFixed(2);
    }
    return sum().toFixed(2);
  }

  function discountAmount() {
    if (SalesOff) {
      return ((SalesOff / 100) * sum()).toFixed(2);
    }
    return '';
  }

  return (
    <div>
      {cart.length !== 0 && (
        <div className='cart-page'>
          <div className='cart-container'>
            <div className='cart-title'>Shopping Cart</div>
            <div className='cart-table'>
              <div className='cart-table-left'>
                <div>Product</div>
              </div>
              <div className='cart-table-right'>
                <div className='cart-table-right-start'>
                  <div>Price</div>
                  <div>Quantity</div>
                </div>
                <div className='cart-table-right-end'>Total</div>
              </div>
            </div>
            <div className='cart-border-light'></div>
            {cartArray}
            <div className='cart-buttons-first'>
              <button className='cart-button cartbtn'>UPDATE CART</button>
              <div className='cart-button-seperator'>|</div>
              <Link to='/shop'>
                <button className='cart-button cartbtn'>
                  Continue shopping
                </button>
              </Link>
            </div>
            <div className='cart-border-dark'></div>
            <div className='discount-section'>
              <div className='discount-flat'>{`${SalesOff}% OFF`}</div>
              <div className='discount-amount'>{`-$${discountAmount()}`}</div>
            </div>
            <div className='subtotal-section'>
              <div className='subtotal-tag'>Subtotal</div>
              <div className='subtotal'>{`$${subtotal()}`}</div>
            </div>
            <div className='cart-border-dark'></div>
            <div className='note-section'>
              <label htmlFor='note' className='add-note'>
                ADD A NOTE TO YOUR ORDER
              </label>
              <textarea className='note' id='note' col='1000' rows='4' />
            </div>
            <div className='checkout-section'>
              <div>
                Taxes and <Link to='/policies/shipping-policy'>shipping</Link>{' '}
                calculated at checkout
              </div>
              <button className='checkout-button'>CHECK OUT</button>
              <div>Price excludes delivery, which is applied at checkout</div>
            </div>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className='cart-empty-container'>
          <div className='cart-empty'>
            <p className='cart-title'>Shopping Cart</p>
            <p>Your cart is currently empty.</p>
            <p>
              <Link to='/shop'>Continue shopping</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
