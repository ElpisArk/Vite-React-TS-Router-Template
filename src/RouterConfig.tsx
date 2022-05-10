import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SampleHome } from './components/SampleHome';
import { SamplePage1 } from './components/SamplePage1';
import { SamplePage2 } from './components/SamplePage2';
import { NotFound } from './components/NotFound';
import { AnimatePresence } from 'framer-motion';

export const RouterConfig: React.VFC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<SampleHome />} />
        <Route path='page1' element={<SamplePage1 />} />
        <Route path='page2' element={<SamplePage2 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
