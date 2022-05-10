import React from 'react';
import ReactDOM from 'react-dom';
import { RouterConfig } from './RouterConfig';
import { BrowserRouter } from 'react-router-dom';
import { SampleHeader } from './components/SampleHeader';

export default function App() {
  return (
    <BrowserRouter>
      <SampleHeader />
      <RouterConfig />
    </BrowserRouter>
  );
}
