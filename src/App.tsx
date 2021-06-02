import React from 'react';
import MainScreen from './components/MainScreen'
import HeaderMenu from './components/HeaderMenu'
import './App.css'
import AdvantageScreen from './components/AdvantageScreen';
import ServiceScreen from './components/ServiceScreen';

export default function App() {
  return <div className="app">
    <HeaderMenu />
    <MainScreen />
    <AdvantageScreen />
    <ServiceScreen />
  </div>
}