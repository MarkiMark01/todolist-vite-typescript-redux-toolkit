import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Loader';

const Todos = lazy(() => import('./Todos'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const RoutesPage = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesPage;
