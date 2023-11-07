import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Importing Pages from Templates folder
import Nav from './templates/navbar';
import Sidenav from './templates/sidenav';
import Home from './templates/home';
import MusicPlayer from './templates/musicplayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Sidenav />
    <MusicPlayer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
