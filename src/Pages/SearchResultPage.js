import Shop from './Shop';
import SearchWidget from '../Components/SearchWidget';

function SearchResultPage({
  searchedItems,
  staticSearched,
  items,
  setSearchedItems,
  searched,
  setSearched,
  setStaticSearched,
  isNavbar,
  setIsNavbar,
}) {
  return (
    <div>
      <SearchWidget
        items={items}
        setSearchedItems={setSearchedItems}
        searched={searched}
        setStaticSearched={setStaticSearched}
        setSearched={setSearched}
        isNavbar={isNavbar}
        setIsNavbar={setIsNavbar}
      />
      <div>
        <div></div>
        <div className='results-decleration'>
          {searchedItems.length === 0
            ? `Your search for "${staticSearched}" did not yield any results.`
            : `We found ${searchedItems.length} results.`}
        </div>
      </div>
      <Shop items={searchedItems} />
    </div>
  );
}

export default SearchResultPage;
