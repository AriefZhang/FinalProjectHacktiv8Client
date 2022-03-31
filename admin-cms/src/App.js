import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch } from "react-redux";
import { userLogin } from "./store/actionCreators/userActions";
import RegisterAdmin from "./components/RegisterAdmin";
import InspectionList from "./components/InspectionList";
import { fetchInspections } from "./store/actionCreators/inspectionActions";
import CarList from "./components/CarList";
import ExteriorList from "./components/ExteriorList";
import InteriorList from "./components/InteriorList";
import RoadTestList from "./components/RoadTestList";
import KolongList from "./components/KolongList";
import PaymentList from "./components/PaymentList";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Products
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchInspections()).then((data) => {
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.access_token) {
      dispatch(userLogin());
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navigate to='/inspections' />}></Route>
        <Route
          path='/'
          element={
            <ProtectedRoute name='home'>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route
            path='inspections'
            element={<InspectionList isLoading={isLoading} />}
          ></Route>
          <Route path='cars' element={<CarList />}></Route>
          <Route path='exterior' element={<ExteriorList />}></Route>
          <Route path='interior' element={<InteriorList />}></Route>
          <Route path='roadtest' element={<RoadTestList />}></Route>
          <Route path='kolong' element={<KolongList />}></Route>
          <Route path='payment' element={<PaymentList />}></Route>
          <Route path='register' element={<RegisterAdmin />}></Route>
        </Route>
        <Route
          path='/login'
          element={
            <ProtectedRoute name='login'>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Navigate to='/product-list' />} />
      </Routes>
    </>
  );
}

export default App;
