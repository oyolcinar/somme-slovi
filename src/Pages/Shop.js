import All from '../Components/All';
import { Outlet } from 'react-router-dom';

function Shop({ items }) {
  return (
    <div className='shop'>
      <All items={items} />
      <Outlet />
    </div>
  );
}

export default Shop;
