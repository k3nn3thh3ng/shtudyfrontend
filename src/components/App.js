import React from 'react';

import AppBar from './AppBarFolder/AppBar';
import HomePageBanner from './HomePageBanner';
import KeyFactsBanner from './KeyFactsBanner';
import LevelToggle from './LevelToggle';
import QuestionsSlider from './QuestionsShowcase';
import ShtudyInfographics from './ShtudyInfographics';
import RecentlyAddedQuestions from './RecentlyAddedQuestions';
import TopCategories from './TopCategories';
import TestimonialSlider from './AppBarFolder/TestimonialSlider';
import Footer from './Footer';


function App() {
  return (
    <div>
      <AppBar />
      <HomePageBanner />
      <KeyFactsBanner />
      <LevelToggle />
      <QuestionsSlider />
      <ShtudyInfographics />
      <RecentlyAddedQuestions />
      <TopCategories />
      <TestimonialSlider />
      <Footer />

      {/* <HomePageBanner />

      
      
      
      <Footer /> */}
    </div>
  );
}

export default App;
