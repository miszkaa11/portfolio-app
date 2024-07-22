// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Scss
import './assets/scss/Main.scss';
// Gallery
import Gallery from './components/main/gallery/Gallery';
import DetailView from './components/main/gallery/DetailView';
// Intro
import Intro from './components/main/Intro';
// About
import About from "./components/main/About";
// Gallery Data
import items from './components/main/gallery/Data';
// Icons
import Icons from "./components/main/Skills";
// Cv
import Cv from "./components/main/Cv";
// CvPage
import CvPage from "./components/cv-page/CvPage";
// Contact
import Contact from "./components/layout/Contact";
// PrivacyPolicyPage
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
// Layout
import Layout from "./components/layout/Layout";
// News
import News from './components/main/news/News';
import Post from './components/main/news/Post';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Intro />
                            <About />
                            <Gallery items={items} />
                            <Icons />
                            <Cv />
                            <Contact />
                        </>

                    } />
                    <Route path="/detail/:id" element={<DetailView items={items} />} />
                    <Route path="/cv-page" element={<CvPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:id" element={<Post />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
