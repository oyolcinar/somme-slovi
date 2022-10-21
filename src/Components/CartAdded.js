import { GrCheckmark } from 'react-icons/gr';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function CartAdded({ name, image, size, setAdded, enableScroll }) {
  return (
    <div className='cart-added-background'>
      <div className='cart-added-container'>
        <div className='cart-added-first-row'>
          <div className='cart-added-text'>
            <GrCheckmark /> Added to cart
          </div>
          <div>
            <RiCloseLine
              className='cart-added-close'
              onClick={() => {
                enableScroll();
                setAdded(false);
              }}
            />
          </div>
        </div>
        <div className='cart-added-second-row'>
          <div className='cart-added-image-container'>
            <img className='cart-added-image' alt='' src={image} />
          </div>
          <div>
            <div className='cart-added-name'>{name}</div>
            <div className='cart-added-size'>SIZE: {size}</div>
          </div>
        </div>
        <div className='cart-added-buttons-container'>
          <Link to='/cart'>
            <button
              onClick={() => enableScroll()}
              className='buy-button add cart-added-buttons'
            >
              VIEW CART
            </button>
          </Link>
          <button className='buy-button buy cart-added-buttons'>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartAdded;
