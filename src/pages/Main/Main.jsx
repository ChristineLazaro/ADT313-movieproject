import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  useEffect(() => {
    if (
      accessToken === undefined ||
      accessToken === '' ||
      accessToken === null
    ) {
      handleLogout();
    }
  }, [accessToken]);

  return (
    <div className='container-main'>
      <div className='layout-dashboard'>
        <div className='sidebar-navigation'>
          <ul className='link-list'>
            {/* <li className='link-item'>
              <a href='/main/dashboard' className='link-anchor'>Dashboard</a>
            </li> */}
            <li className='link-item'>
              <a href='/main/movies' className='link-anchor'>Movies</a>
            </li>
            <li className='link-item logout-link'>
              <a onClick={handleLogout} className='link-anchor'>Logout</a>
            </li>
          </ul>
        </div>
        <div className='content-display'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
