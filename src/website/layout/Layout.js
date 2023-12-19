import React from 'react';
// const LazyMainHeader = lazy(() => import('./MainHeader'));
// const LazyFooter = lazy(() => import('./Footer'));
import MainHeader from './MainHeader';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
 
        <MainHeader/>
      {children}
        <Footer />
    </div>
  );
}

export default Layout;
