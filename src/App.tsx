import React from 'react';
import MainScreen from './components/MainScreen'
import HeaderMenu from './components/HeaderMenu'
import './App.css'
import AdvantageScreen from './components/AdvantageScreen';
import ServiceScreen from './components/ServiceScreen';
import WorkStepScreen from './components/WorkStepScreen';
import ContactScreen from './components/ContactScreen';
import Footer from './components/Footer';

export default function App() {
  return <div className="app">
    <HeaderMenu />
    <div className="content">
      <MainScreen />
      <AdvantageScreen />
      <ServiceScreen />
      <WorkStepScreen />
      <ContactScreen />
    </div>
    <Footer />
  </div>
}