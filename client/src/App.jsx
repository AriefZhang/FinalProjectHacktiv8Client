import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CarList from "./pages/CarList";
import Navbar from "./components/navbar/templates/Navbar";
import Footer from "./components/footer/templates/Footer";
import Login from "./pages/Login";
import CmsDealerq from "./pages/CmsDealer";
import Register from "./pages/Register";
import LoginDealer from "./pages/LoginDealer";
import RegisterDealer from "./pages/RegisterDealer";
import CmsAdmin from "./pages/CmsDealer";
import Detail from './pages/DetailPage';
import MapsNavigation from './components/MapsNavigation';
import FullReportPage from './components/FullReportPage';
import PaymentPage from './components/PaymentPage';

export default function App() {
  return (
    <div className="App">
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/login/user" element={<Login />} />
          <Route path="/dashboard/dealer/:id" element={<CmsDealerq />} />
          <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/full-report/:idInspection' element={<FullReportPage/>}/>
        <Route path='/map-navigation/:id' element={<MapsNavigation/>}/>
        <Route path='/payments/:carId' element={<PaymentPage/>}/>
          {/* <Route path="/login/dealer" element={<LoginDealer />} />
          <Route path="/register/user" element={<Register />} />
          <Route path="/register/dealer" element={<RegisterDealer />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
