import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Items from './Assets/Items';
import Accessories from './Assets/Accessories';
import Bottoms from './Assets/Bottoms';
import Dresses from './Assets/Dresses';
import Outwear from './Assets/Outwear';
import Tops from './Assets/Tops';
import Home from './Pages/Home';
import NavbarComp from './Components/Navbar';
import Footer from './Components/Footer';
import Shop from './Pages/Shop';
import ItemView from './Components/ItemView';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AboutText from './Assets/PageTexts/AboutText';
import Terms from './Pages/PolicyPages/Terms';
import Refund from './Pages/PolicyPages/Refund';
import Privacy from './Pages/PolicyPages/Privacy';
import Shipping from './Pages/PolicyPages/Shipping';
import TermsOfService from './Assets/PageTexts/TermsOfService';
import ReturnRefund from './Assets/PageTexts/ReturnRefund';
import PrivacyPolicy from './Assets/PageTexts/PrivacyPolicy';
import ShippingPolicy from './Assets/PageTexts/ShippingPolicy';
import Cart from './Components/Cart';
import { useState } from 'react';
import PageNotFound from './Pages/PageNotFound';
import ScrollToTop from './Utils/ScrollToTop';
import SearchResultPage from './Pages/SearchResultPage';
import SearchWidget from './Components/SearchWidget';

function RouteSwitch() {
  const [cart, setCart] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [searched, setSearched] = useState('');
  const [staticSearched, setStaticSearched] = useState('');
  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavbarComp
        items={Items}
        setSearchedItems={setSearchedItems}
        searched={searched}
        setStaticSearched={setStaticSearched}
        setSearched={setSearched}
        isNavbar={isNavbar}
        setIsNavbar={setIsNavbar}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About text={AboutText} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop items={Items} />} />
        <Route path='/shop/tops' element={<Shop items={Tops} />} />
        <Route path='/shop/dresses' element={<Shop items={Dresses} />} />
        <Route path='/shop/bottoms' element={<Shop items={Bottoms} />} />
        <Route path='/shop/outwear' element={<Shop items={Outwear} />} />
        <Route
          path='/policies/terms-of-service'
          element={<Terms text={TermsOfService} />}
        />
        <Route
          path='/policies/refund-policy'
          element={<Refund text={ReturnRefund} />}
        />
        <Route
          path='/policies/privacy-policy'
          element={<Privacy text={PrivacyPolicy} />}
        />
        <Route
          path='/policies/shipping-policy'
          element={<Shipping text={ShippingPolicy} />}
        />
        <Route
          path='/shop/accessories'
          element={<Shop items={Accessories} />}
        />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path='/shop/:id'
          element={<ItemView cart={cart} setCart={setCart} />}
        />
        <Route
          path='/search'
          element={
            <SearchWidget
              items={Items}
              setSearchedItems={setSearchedItems}
              searched={searched}
              setStaticSearched={setStaticSearched}
              setSearched={setSearched}
              isNavbar={isNavbar}
              setIsNavbar={setIsNavbar}
            />
          }
        />
        <Route
          path='/search/:id'
          element={
            <SearchResultPage
              items={Items}
              setSearchedItems={setSearchedItems}
              searched={searched}
              setStaticSearched={setStaticSearched}
              setSearched={setSearched}
              searchedItems={searchedItems}
              staticSearched={staticSearched}
              isNavbar={isNavbar}
              setIsNavbar={setIsNavbar}
            />
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
