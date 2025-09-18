import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
// Removemos a importação do BookingWidget
import './Header.css';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url('https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/fundo_viale.jpg')`
  };

  return (
    <header className="hero-section" style={headerStyle}>
      <div className="hero-overlay"></div>
      <Navbar />
      {/* O BookingWidget foi removido daqui */}
    </header>
  );
};

export default Header;