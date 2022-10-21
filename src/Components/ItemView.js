import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { GrCheckmark } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import CartAdded from './CartAdded';

function ItemView({ cart, setCart }) {
  const [added, setAdded] = useState(true);
  const [sizeSelected, setSizeSelected] = useState('');
  const [warning, setWarning] = useState(false);
  const location = useLocation();
  const product = location.state.item;

  useEffect(() => {
    setAdded(false);
    enableScroll();
  }, []);

  function noScroll() {
    document.body.classList.add('no-scroll');
  }

  function enableScroll() {
    document.body.classList.remove('no-scroll');
  }

  const images = product.images.map((image) => (
    <img
      alt=''
      className='product-images-large'
      src={image}
      key={nanoid()}
    ></img>
  ));

  const sizes = product.sizes.map((size) => (
    <label htmlFor={size} className='size-label' key={nanoid()}>
      <input
        type='radio'
        value={size}
        name='size'
        className='size-select'
        id={size}
        key={nanoid()}
        onChange={() => {
          setWarning(false);
          setSizeSelected(size);
        }}
      />
      {size}
    </label>
  ));

  function incrementQuantity() {
    const newCart = cart.map((item) => {
      if (
        item.id === product.id &&
        item.selectedSize === product.selectedSize
      ) {
        return {
          ...item,
          quantity:
            item.quantity === item.inStock ? item.quantity : item.quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function addNewProduct() {
    setCart((prevCart) => [
      ...prevCart,
      {
        ...product,
        quantity: 1,
        selectedSize: sizeSelected,
      },
    ]);
  }

  function addToCart() {
    const isItemInCart = cart.filter(
      (item) => item.id === product.id && item.selectedSize === sizeSelected,
    );
    if (isItemInCart.length > 0) {
      incrementQuantity();
    }
    if (isItemInCart.length === 0) {
      addNewProduct();
    }
  }

  function checkIfSizeSelected() {
    if (sizeSelected || sizes.length === 1) {
      setWarning(false);
      addToCart();
      setAdded(true);
      noScroll();
    }
    if (!sizeSelected && sizes.length !== 1) setWarning(true);
  }

  return (
    <div className='product-item-view'>
      {added && (
        <CartAdded
          image={product.images[0]}
          name={product.name}
          size={sizeSelected}
          setAdded={setAdded}
          enableScroll={enableScroll}
        />
      )}
      <div className='product-images'>{images}</div>
      <div className='product-info-bar'>
        <div className='product-tag'>
          <h6 className='product-name'>{product.name}</h6>
          <p className='product-price'>{`$${product.price.toFixed(2)}`}</p>
        </div>
        <p className='product-description'>{product.description}</p>
        <div className='size-section'>
          <p className='size-tag'>SIZE</p>
          <div className='size-selection-section'>{sizes}</div>
          {warning && <div className='size-warning'>Please select a size.</div>}
          <button className='size-guide-button'>SIZE GUIDE</button>
        </div>
        <div className='buy-button-section'>
          <button
            className='buy-button add'
            onClick={() => {
              checkIfSizeSelected();
            }}
          >
            {added && <GrCheckmark className='checkmark' />}
            {added ? 'ADDED TO CART' : 'ADD TO CART'}
          </button>
          <button className='buy-button buy'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default ItemView;
