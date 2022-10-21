import ItemCard from './ItemCard';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function All({ items }) {
  function enableScroll() {
    document.body.classList.remove('no-scroll');
  }

  useEffect(() => {
    enableScroll();
  }, []);

  const allItems = items.map((item) => (
    <Link
      to={`/shop/${item.name.toLowerCase()}`}
      key={nanoid()}
      state={{ item: item }}
    >
      <ItemCard
        key={nanoid()}
        name={item.name}
        description={item.description}
        type={item.type}
        images={item.images}
        price={item.price}
      />
    </Link>
  ));

  return <div className='item-tile'>{allItems}</div>;
}

export default All;
