import React from 'react';
import MainScreen from './components/MainScreen'
import HeaderMenu from './components/HeaderMenu'
import './App.css'

export default function App() {
  return <div className="app">
    <HeaderMenu />
    <MainScreen />
  </div>
}