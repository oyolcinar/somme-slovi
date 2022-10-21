import { Navbar, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/Logos/logo.png';
import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';

function NavbarComp({
  items,
  setSearchedItems,
  searched,
  setSearched,
  setStaticSearched,
  isNavbar,
  setIsNavbar,
}) {
  const [isHovered, setIsHovered] = useState(false);

  let navigate = useNavigate();

  function searchItems() {
    const searchedItemsArray = items.filter(
      (i) =>
        i.name.toLowerCase().includes(searched) ||
        i.description.toLowerCase().includes(searched) ||
        i.type.toLowerCase().includes(searched),
    );
    setSearchedItems(searchedItemsArray);
  }

  function handleSearch() {
    setStaticSearched(searched);
    searchItems();
    navigate(`/search/${searched}`);
    setSearched('');
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <Navbar fixed='top' className='navbar'>
      <div className='navbar-left'>
        <Dropdown
          as={ButtonGroup}
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onToggle={() => {
            setIsHovered(false);
          }}
          show={isHovered}
          onClick={() => {
            setIsHovered((prev) => !prev);
          }}
        >
          <Dropdown.Toggle className='dropdown-button'>SHOP</Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu'>
            <Dropdown.Item
              as={Link}
              to='/search'
              className='dropdown-item dropdown-search'
            >
              <FaSistrix />
              SEARCH
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/shop' className='dropdown-item'>
              ALL
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/shop/tops' className='dropdown-item'>
              TOPS
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/shop/dresses'
              className='dropdown-item'
            >
              DRESSES
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/shop/bottoms'
              className='dropdown-item'
            >
              BOTTOMS
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/shop/outwear'
              className='dropdown-item'
            >
              OUTWEAR
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/shop/accessories'
              className='dropdown-item'
            >
              ACCESSORIES
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Link to='/'>
        <img className='logo' src={Logo} alt='' />
      </Link>
      <div className='navbar-right'>
        <FaSistrix className='search-icon' />
        <input
          type='text'
          className='searchbar'
          onChange={(e) => {
            setIsNavbar(true);
            setSearched(e.target.value.toLowerCase());
          }}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          value={isNavbar ? searched : ''}
        />
        <Link to='/cart'>
          <button className='cart-button'>BAG</button>
        </Link>
      </div>
    </Navbar>
  );
}

export default NavbarComp;
