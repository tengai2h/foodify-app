import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Favorite from 'pages/Favorites/Favorite';
import { ROUTES } from 'constants/routes';
import Main from 'pages/Main/Main';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<Main />} />
      <Route path={ROUTES.FAVORITES} element={<Favorite />} />
      <Route path="/" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default Router;
