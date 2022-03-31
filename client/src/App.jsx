import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CarList from "./pages/CarList";
import Navbar from "./components/navbar/templates/Navbar";
import Footer from "./components/footer/templates/Footer";
import CmsDealer from "./pages/CmsDealer";
import RegisterDealer from "./pages/RegisterDealer";
import Detail from "./pages/DetailPage";
import MapsNavigation from "./components/MapsNavigation";
import FullReportPage from "./components/FullReportPage";
import PaymentPage from "./components/PaymentPage";
import NavigationGuard from "./components/navigationGuard/NavigationGuard";
import CmsDealerSellForm from "./pages/CmsDealerSellForm";
import CmsDealerDashboard from "./pages/CmsDealerDashboard";
import LoginModalDealer from "./components/modals/templates/LoginModalDealer";
import LoginModalBuyer from "./components/modals/templates/LoginModalBuyer";
import RegisterBuyer from "./pages/RegisterBuyer";
import ProtectedRoute from "./components/ProtectionRoute";
import MyBill from "./components/MyBillPage";

export default function App() {
  const [loginDealer, setLoginDealer] = useState(false);
  const [loginBuyer, setLoginBuyer] = useState(false);
  return (
    <div className='App'>
      <div className='w-full min-h-screen bg-white'>
        <Navbar setLoginBuyer={setLoginBuyer} setLoginDealer={setLoginDealer} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<CarList />} />
          <Route
            path='/dealer/dashboard'
            element={
              <NavigationGuard setLoginDealer={setLoginDealer}>
                <CmsDealer />
              </NavigationGuard>
            }
          >
            <Route path='' element={<CmsDealerDashboard />} />
            <Route path='sell' element={<CmsDealerSellForm />} />
          </Route>
          <Route path='/detail/:id' element={<Detail />} />
          <Route
            path='/full-report/:idInspection'
            element={<FullReportPage />}
          />
          <Route path='/map-navigation/:id' element={<MapsNavigation />} />
          <Route
            path='/payments/:carId'
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/mybill'
            element={
              <ProtectedRoute>
                <MyBill />
              </ProtectedRoute>
            }
          />
          <Route
            path='/register/user'
            element={<RegisterBuyer setLoginBuyer={setLoginBuyer} />}
          />
          <Route
            path='/register/dealer'
            element={<RegisterDealer setLoginDealer={setLoginDealer} />}
          />
          <Route path='/map-navigation/:id' element={<MapsNavigation />} />
          <Route path='/payments/:carId' element={<PaymentPage />} />
        </Routes>
        <Footer />
        <LoginModalDealer
          showModal={loginDealer}
          setShowModal={setLoginDealer}
        />
        <LoginModalBuyer showModal={loginBuyer} setShowModal={setLoginBuyer} />
      </div>
    </div>
  );
}
