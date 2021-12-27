import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import Modal from 'components/Modal/Modal';

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const onClose = () => setActive(false);
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
        {isFavoritesPage ? (
          <button
            className="header-button"
            onClick={() => setActive(true)}
          >
            Add custom dish
          </button>
        ) : (
          ''
        )}
      </div>
      <Modal setActive={onClose} active={active}></Modal>
    </header>
  );
};

export default Header;
