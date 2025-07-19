import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import PurchasePage from '@/pages/PurchasePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comprar" element={<PurchasePage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;