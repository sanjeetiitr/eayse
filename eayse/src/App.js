import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./asset/css/main.scss"
import { LoginView } from './component/login/loginView';
import "./asset/css/style.css"
import { RoomView } from './component/room/roomView';

function App() {
  return (
    <RoomView/>
    // <LoginView/>
  );
}

export default App;
