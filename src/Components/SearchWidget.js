import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function SearchWidget({
  items,
  setSearchedItems,
  searched,
  setSearched,
  setStaticSearched,
  isNavbar,
  setIsNavbar,
}) {
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
    <div className='search-widget'>
      <div>
        <input
          type='text'
          className='email-field'
          onChange={(e) => {
            setIsNavbar(false);
            setSearched(e.target.value.toLowerCase());
          }}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          placeholder='Type to search'
          value={!isNavbar ? searched : ''}
        />
        <HiOutlineArrowRight
          className='arrow'
          onClick={() => {
            handleSearch();
          }}
        />
      </div>
    </div>
  );
}

export default SearchWidget;
