import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import PWAPrompt from 'react-ios-pwa-prompt'


function App() {
  return (  
    <>
    <header>This is header</header>

    <main>
        <Outlet/>
    </main>

    <footer>
        <p>Do it propely!!</p>
    </footer>

    <PWAPrompt copyTitle="Føj til hjemmeskærm"/>
    </>
  );
}

export default App;
