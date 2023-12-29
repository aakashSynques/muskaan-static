import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainHeader from './website/layout/MainHeader';
import Footer from './website/layout/Footer';
import NotFound from './website/component/NotFound';
import './website/assets/css/style.css'
// const Home = lazy(() => import('./website/pages/Home'));
// import Home from './website/pages/Home'
// const About = lazy(() => import('./website/pages/aboutPages/About'));
// const Connect = lazy(() => import('./website/pages/Connect'));
// const Education = lazy(() => import('./website/pages/work/Education'));
// const Communicable = lazy(() => import('./website/pages/communicables/Communicable'));
// const Empowering = lazy(() => import('./website/pages/work/Empowering'));
// const IssuesOfDignity = lazy(() => import('./website/pages/work/IssuesOfDignity'));
// const Livelihood = lazy(() => import('./website/pages/work/Livelihood'));
// const SustainableLiving = lazy(() => import('./website/pages/work/SustainableLiving'));
// const Publication = lazy(() => import('./website/pages/work/Publication'));
// const History = lazy(() => import('./website/pages/aboutPages/History'));
// const Mission = lazy(() => import('./website/pages/aboutPages/Mission'));
// const WhoWeWork = lazy(() => import('./website/pages/aboutPages/WhoWeWork'));
// const Policies = lazy(() => import('./website/pages/aboutPages/Policies'));
// const OurTeam = lazy(() => import('./website/pages/aboutPages/OurTeam'));
// const Collaborations = lazy(() => import('./website/pages/aboutPages/Collaborations'));
// const Financial = lazy(() => import('./website/pages/aboutPages/Financial'));

import Home from './website/pages/Home';
import About from './website/pages/aboutPages/About';
import Connect from './website/pages/Connect';
import Education from './website/pages/work/Education';
import Communicable from './website/pages/communicables/Communicable';
import Empowering from './website/pages/work/Empowering';
import IssuesOfDignity from './website/pages/work/IssuesOfDignity';
import Livelihood from './website/pages/work/Livelihood';
import SustainableLiving from './website/pages/work/SustainableLiving';
import Publication from './website/pages/work/Publication';
import History from './website/pages/aboutPages/History';
import Mission from './website/pages/aboutPages/Mission';
import WhoWeWork from './website/pages/aboutPages/WhoWeWork';
import Policies from './website/pages/aboutPages/Policies';
import OurTeam from './website/pages/aboutPages/OurTeam';
import Collaborations from './website/pages/aboutPages/Collaborations';
import Financial from './website/pages/aboutPages/Financial';
import ThankYou from './website/pages/connectTabs/ThankYou';


function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/about-us/history' element={<History />} />
          <Route path='/about-us/mission/' element={<Mission />} />
          <Route path='/about-us/who-we-work-with/' element={<WhoWeWork />} />
          <Route path='/about-us/policies/' element={<Policies />} />
          <Route path='/about-us/financial/' element={<Financial />} />
          <Route path='/about-us/our-team/' element={<OurTeam />} />
          <Route path='/about-us/collaborations/' element={<Collaborations />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/work/education' element={<Education />} />
          <Route path='/work/empowering-children-and-youth' element={<Empowering />} />
          <Route path='/work/issues-of-dignity-and-survival' element={<IssuesOfDignity />} />
          <Route path='/work/liveLihoods' element={<Livelihood />} />
          <Route path='/work/sustainable-living' element={<SustainableLiving />} />
          <Route path='/work/publication' element={<Publication />} />
          <Route path='/communicable' element={<Communicable />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


