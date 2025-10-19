import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer'; // Updated Path

const DefaultLayout = () => {
  const location = useLocation();
  const [persona, setPersona] = useState('home');
  const [mode, setMode] = useState('light'); // Defaulting to light mode

  const handleThemeToggle = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    const currentPersona = ['bhuwan', 'mohanmitra', 'technofancy'].includes(path) ? path : 'home';
    setPersona(currentPersona);
  }, [location]);

  // Effect to apply theme class to the body
  useEffect(() => {
    const body = document.body;
    body.className = ''; // Clear previous classes
    body.classList.add(mode); // Add 'light' or 'dark'
    body.classList.add(`theme-${persona}`); // Add 'theme-bhuwan', etc.
  }, [persona, mode]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Navbar mode={mode} onThemeToggle={handleThemeToggle} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;