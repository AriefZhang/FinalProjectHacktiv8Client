import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../store/actionCreators/userActions";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutHandler() {
    localStorage.clear();
    dispatch(userLogout());
    navigate("/login");
  }
  return (
    <nav
      id='sidebar'
      className='nav flex-column justify-content-start align-items-start navbar'
    >
      <div id='user-info'>
        <img
          className='me-2'
          src='https://dmrqkbkq8el9i.cloudfront.net/Pictures/1024x536/3/0/2/159302_jubel_crop.jpg'
          alt=''
        />
        <div>
          <h5>{localStorage.user}</h5>
          <p>{localStorage.role}</p>
        </div>
      </div>
      <hr />
      <ul className='navbar-nav nav'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link to='/inspections' className='nav-link nav-menu'>
              <i className='fa-solid fa-table-columns'></i>&nbsp; Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='cars' className='nav-link nav-menu'>
              <i class='fa-solid fa-car'></i>&nbsp; Cars
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='exterior' className='nav-link nav-menu'>
              <i class='fa-solid fa-car-on'></i>&nbsp; Exterior
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='interior' className='nav-link nav-menu'>
              <i class='fa-solid fa-car-tunnel'></i>&nbsp; Interior
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='roadtest' className='nav-link nav-menu'>
              <i class='fa-solid fa-road'></i>&nbsp; Road Test
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='kolong' className='nav-link nav-menu'>
              <i class='fa-solid fa-car-battery'></i>&nbsp; Bottom Test
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='register' className='nav-link nav-menu'>
              <i className='fas fa-user-cog'></i>&nbsp; Register Admin
            </Link>
          </li>
          <li className='nav-item'>
            <a
              href='/login'
              onClick={logoutHandler}
              className='nav-link nav-menu'
            >
              <i className='fas fa-sign-out-alt'></i>&nbsp; Logout
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Sidebar;
