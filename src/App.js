import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import LandingPage from './pages/user/LandingPage';
import RentalListing from './pages/user/RentalListing';
import HowitWorks from './pages/user/HowitWorks';
import Contact from './pages/user/Contact';
import UserDetail from './pages/user/UserDetail';
import RoomDetails from './pages/user/RoomDetails';
import Dashboard from './pages/admin/Dashboard';
import UserList from './pages/admin/UserList';
import PostRoom from './pages/admin/PostRoom';
import HowitWorks2 from './pages/user/HowitWorks2';
import PrivateRoute from './routes/PrivateRoute';
import BookingForm from './pages/user/BookingForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login-page' element={<Login />} />
          <Route path='/register-page' element={<Register />} />
          <Route path='/landing-page' element={<LandingPage />} />
          {/* <Route path='/rental-listing-page' element={<RentalListing />} /> */}
          <Route path='/rental-listing-page' element={<PrivateRoute component={RentalListing} />} />
          <Route path='/how-it-works-page-tenant' element={<HowitWorks />} />
          <Route path='/how-it-works-page-landlord' element={<HowitWorks2 />} />
          <Route path='/contact-page' element={<Contact />} />
          <Route path='/user-detail-page' element={<UserDetail />} />
          <Route path='/room-detail-page/:roomId' element={<RoomDetails />} />
          <Route path='/admin-dashboard-page' element={<Dashboard />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/post-room' element={<PostRoom />} />
          <Route path='/book-room' element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>

  );
}

export default App;