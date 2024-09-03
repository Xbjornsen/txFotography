import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;