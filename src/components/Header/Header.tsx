import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import Modal from 'components/Modal/Modal';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (isShow: boolean) => setShowModal(isShow);
  const { pathname } = useLocation();

  const isFavoritesPage = useMemo(
    () => pathname === ROUTES.FAVORITES,
    [pathname],
  );

  return (
    <header className="header">
      <div className="header-items">
        <div className="header-item">
          <Link className="header-link" to={ROUTES.MAIN}>
            Random dish
          </Link>
        </div>
        <div className="header-item">
          <Link className="header-link" to={ROUTES.FAVORITES}>
            Favorites
          </Link>
        </div>
        {isFavoritesPage && (
          <button
            className="header-button"
            onClick={() => handleShowModal(true)}
          >
            Add custom dish
          </button>
        )}
      </div>
      <Modal
        setShowModal={handleShowModal}
        showModal={showModal}
      ></Modal>
    </header>
  );
};

export default Header;
