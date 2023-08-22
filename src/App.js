import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
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
    </>
);
}

export default App;
