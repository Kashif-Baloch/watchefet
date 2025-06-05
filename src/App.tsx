// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RolexModelsPage from './pages/rolex/RolexModelsPage';
import DatejustPage from './pages/rolex/models/DatejustPage';
import DayDatePage from './pages/rolex/models/DayDatePage';
import SubmarinerPage from './pages/rolex/models/SubmarinerPage';
import GMTMasterPage from './pages/rolex/models/GMTMasterPage';
import DaytonaPage from './pages/rolex/models/DaytonaPage';
import ExplorerPage from './pages/rolex/models/ExplorerPage';
import DeepseaPage from './pages/rolex/models/DeepseaPage';
import YachtMasterPage from './pages/rolex/models/YachtMasterPage';
import SkyDwellerPage from './pages/rolex/models/SkyDwellerPage';
import AllRolexModelsPage from './pages/rolex/AllRolexModelsPage';
import AudemarsPiguetPage from './pages/AudemarsPiguetPage';
// import PatekPhilippePage from './pages/PatekPhilippePage';
import PatekCollectionsPage from './pages/patek/PatekCollectionsPage';
import NautilusPage from './pages/patek/models/NautilusPage';
import AquanautPage from './pages/patek/models/AquanautPage';
// import HublotPage from './pages/HublotPage';
import HublotCollectionsPage from './pages/hublot/HublotCollectionsPage';
import BigBangPage from './pages/hublot/models/BigBangPage';
import ClassicFusionPage from './pages/hublot/models/ClassicFusionPage';
import SpiritOfBigBangPage from './pages/hublot/models/SpiritOfBigBangPage';
import ExploreCollectionsPage from './pages/ExploreCollectionsPage';
import WomensCollectionPage from './pages/WomensCollectionPage';
import AudemarsPiguetWomensPage from './pages/womens/AudemarsPiguetWomensPage';
import RolexWomensPage from './pages/womens/RolexWomensPage';
import PatekPhilippeWomensPage from './pages/womens/PatekPhilippeWomensPage';
import HublotWomensPage from './pages/womens/HublotWomensPage';
import ContactPage from './pages/ContactPage';
import RequestModelPage from './pages/RequestModelPage';
import RolexDatejustPage from './pages/products/RolexDatejustPage';
import DatejustBlueDial from './pages/products/DatejustBlueDial';
import DatejustGreyDial from './pages/products/DatejustGreyDial';
import DatejustWhiteDial from './pages/products/DatejustWhiteDial';
import DatejustWimbledonDial from './pages/products/DatejustWimbledonDial';
import DatejustRomanDial from './pages/products/DatejustRomanDial';
import DatejustGoldDiamondDial from './pages/products/DatejustGoldDiamondDial';
import DatejustGoldDiamondOysterDial from './pages/products/DatejustGoldDiamondOysterDial';
import DatejustGreyDiamondOysterDial from './pages/products/DatejustGreyDiamondOysterDial';
import DatejustGoldChampagneDial from './pages/products/DatejustGoldChampagneDial';
import DatejustGoldChampagneOysterDial from './pages/products/DatejustGoldChampagneOysterDial';
import DatejustWimbledonTwoTone from './pages/products/DatejustWimbledonTwoTone';
import DatejustBrownDial from './pages/products/DatejustBrownDial';
import DatejustBrownDiamondDial from './pages/products/DatejustBrownDiamondDial';
import DatejustWhiteChampagneDial from './pages/products/DatejustWhiteChampagneDial';
import DatejustMotherOfPearlDial from './pages/products/DatejustMotherOfPearlDial';
import DatejustBlueSmoothDial from './pages/products/DatejustBlueSmoothDial';
import DatejustGreenSmoothDial from './pages/products/DatejustGreenSmoothDial';
import DatejustMotherOfPearlOysterDial from './pages/products/DatejustMotherOfPearlOysterDial';
import DatejustWimbledonOysterDial from './pages/products/DatejustWimbledonOysterDial';
import DayDateGoldPage from './pages/products/DayDateGoldPage';
import DayDateIceBluePage from './pages/products/DayDateIceBluePage';
import DayDateBrownRomanPage from './pages/products/DayDateBrownRomanPage';
import DatejustBlueOysterDial from './pages/products/DatejustBlueOysterDial';
import DatejustGreenOysterDial from './pages/products/DatejustGreenOysterDial';
import DayDateGoldDiamondPage from './pages/products/DayDateGoldDiamondPage';
import DayDateBlackGoldPage from './pages/products/DayDateBlackGoldPage';
import CartPage from './pages/CartPage';
import SuccessPage from './pages/checkout/SuccessPage';
import CancelPage from './pages/checkout/CancelPage';
import WarrantyPage from './pages/WarrantyPage';
import ShippingPage from './pages/ShippingPage';
import PrivacyPage from './pages/PrivacyPage';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/common/ScrollToTop';
import Notifications from './components/common/Notifications';
import ProductDet from './components/product/ProductDet';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Notifications />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDet />} />
          <Route path="/rolex" element={<RolexModelsPage />} />
          <Route path="/rolex/all-models" element={<AllRolexModelsPage />} />
          <Route path="/rolex/datejust" element={<DatejustPage />} />
          <Route path="/rolex/day-date" element={<DayDatePage />} />
          <Route path="/rolex/submariner" element={<SubmarinerPage />} />
          <Route path="/rolex/gmt-master-ii" element={<GMTMasterPage />} />
          <Route path="/rolex/daytona" element={<DaytonaPage />} />
          <Route path="/rolex/explorer-ii" element={<ExplorerPage />} />
          <Route path="/rolex/deepsea" element={<DeepseaPage />} />
          <Route path="/rolex/yacht-master" element={<YachtMasterPage />} />
          <Route path="/rolex/sky-dweller" element={<SkyDwellerPage />} />
          <Route path="/audemars-piguet" element={<AudemarsPiguetPage />} />
          <Route path="/patek-philippe" element={<PatekCollectionsPage />} />
          <Route path="/patek-philippe/nautilus" element={<NautilusPage />} />
          <Route path="/patek-philippe/aquanaut" element={<AquanautPage />} />
          <Route path="/hublot" element={<HublotCollectionsPage />} />
          <Route path="/hublot/big-bang" element={<BigBangPage />} />
          <Route path="/hublot/classic-fusion" element={<ClassicFusionPage />} />
          <Route path="/hublot/spirit-of-big-bang" element={<SpiritOfBigBangPage />} />
          <Route path="/collections" element={<ExploreCollectionsPage />} />
          <Route path="/womens-collection" element={<WomensCollectionPage />} />
          <Route path="/audemars-piguet/womens" element={<AudemarsPiguetWomensPage />} />
          <Route path="/rolex/womens" element={<RolexWomensPage />} />
          <Route path="/patek-philippe/womens" element={<PatekPhilippeWomensPage />} />
          <Route path="/hublot/womens" element={<HublotWomensPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-model" element={<RequestModelPage />} />
          <Route path="/rolex/datejust/black-dial" element={<RolexDatejustPage />} />
          <Route path="/rolex/datejust/blue-dial" element={<DatejustBlueDial />} />
          <Route path="/rolex/datejust/grey-dial" element={<DatejustGreyDial />} />
          <Route path="/rolex/datejust/white-dial" element={<DatejustWhiteDial />} />
          <Route path="/rolex/datejust/wimbledon-dial" element={<DatejustWimbledonDial />} />
          <Route path="/rolex/datejust/roman-dial" element={<DatejustRomanDial />} />
          <Route path="/rolex/datejust/gold-diamond-dial" element={<DatejustGoldDiamondDial />} />
          <Route path="/rolex/datejust/gold-diamond-oyster-dial" element={<DatejustGoldDiamondOysterDial />} />
          <Route path="/rolex/datejust/grey-diamond-oyster-dial" element={<DatejustGreyDiamondOysterDial />} />
          <Route path="/rolex/datejust/gold-champagne-dial" element={<DatejustGoldChampagneDial />} />
          <Route path="/rolex/datejust/gold-champagne-oyster-dial" element={<DatejustGoldChampagneOysterDial />} />
          <Route path="/rolex/datejust/blue-oyster-dial" element={<DatejustBlueOysterDial />} />
          <Route path="/rolex/datejust/green-oyster-dial" element={<DatejustGreenOysterDial />} />
          <Route path="/rolex/datejust/wimbledon-two-tone" element={<DatejustWimbledonTwoTone />} />
          <Route path="/rolex/datejust/wimbledon-two-tone-oyster" element={<DatejustWimbledonOysterDial />} />
          <Route path="/rolex/datejust/brown-dial" element={<DatejustBrownDial />} />
          <Route path="/rolex/datejust/brown-diamond-dial" element={<DatejustBrownDiamondDial />} />
          <Route path="/rolex/datejust/white-champagne-dial" element={<DatejustWhiteChampagneDial />} />
          <Route path="/rolex/datejust/mother-of-pearl-dial" element={<DatejustMotherOfPearlDial />} />
          <Route path="/rolex/datejust/blue-smooth-dial" element={<DatejustBlueSmoothDial />} />
          <Route path="/rolex/datejust/green-smooth-dial" element={<DatejustGreenSmoothDial />} />
          <Route path="/rolex/datejust/mother-of-pearl-oyster-dial" element={<DatejustMotherOfPearlOysterDial />} />
          <Route path="/rolex/day-date/white-roman-gold" element={<DayDateGoldPage />} />
          <Route path="/rolex/day-date/ice-blue-dial" element={<DayDateIceBluePage />} />
          <Route path="/rolex/day-date/brown-roman-rose-gold" element={<DayDateBrownRomanPage />} />
          <Route path="/rolex/day-date/gold-diamond-president" element={<DayDateGoldDiamondPage />} />
          <Route path="/rolex/day-date/black-dial-gold" element={<DayDateBlackGoldPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout/success" element={<SuccessPage />} />
          <Route path="/checkout/cancel" element={<CancelPage />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;