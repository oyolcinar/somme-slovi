import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='not-found-container'>
      <p className='not-found-bold'>404 Page Not Found</p>
      <p>
        The page you requested does not exist.{' '}
        <Link to='/shop'>Continue shopping</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
