import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartItem({
  item,
  id,
  image,
  name,
  size,
  price,
  quantity,
  cart,
  setCart,
  inStock,
}) {
  useEffect(() => {
    if (quantity === 0) {
      removeItem();
    }
  }, []);

  function increaseQuantity() {
    const newCart = cart.map((item) => {
      if (item.id === id && item.selectedSize === size) {
        return {
          ...item,
          quantity: quantity === inStock ? quantity : quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function decreaseQuantity() {
    const newCart = cart.map((item) => {
      if (item.id === id && item.selectedSize === size) {
        return { ...item, quantity: quantity > 0 ? quantity - 1 : quantity };
      }
      return item;
    });
    setCart(newCart);
  }

  function removeItem() {
    const removedArray = cart.filter(
      (i) => id !== i.id || i.selectedSize !== size,
    );
    setCart(removedArray);
  }

  return (
    <div className='cart-item-container'>
      <div className='cart-title'></div>
      <div className='cart-table'>
        <div className='cart-item-left'>
          <Link to={`/shop/${name.toLowerCase()}`} state={{ item: item }}>
            <img className='cart-item-image' alt='' src={image} />
          </Link>
          <Link to={`/shop/${name.toLowerCase()}`} state={{ item: item }}>
            <div className='cart-name-size-container'>
              <div className='cart-item-name'>{name}</div>
              <div className='cart-item-size'>{size}</div>
            </div>
          </Link>
        </div>
        <div className='cart-table-right cart-item'>
          <div className='cart-table-right-start-item'>
            <div className='cart-item-price'>{`$${price.toFixed(2)}`}</div>
            <div className='cart-table-right-buttons'>
              <div className='quantity-button-container'>
                <div>
                  <button
                    className='quantity-button'
                    onClick={() => {
                      decreaseQuantity();
                    }}
                  >
                    –
                  </button>
                </div>
                <div className='quantity-show'>{quantity}</div>
                <div>
                  <button
                    className='quantity-button'
                    onClick={() => {
                      increaseQuantity();
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button
                  className='remove-item-button'
                  onClick={() => {
                    removeItem();
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className='cart-table-right-end-cart-item'>{`$${(
            price * quantity
          ).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
