import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import ToTop from "../parts/ToTop";
import StickyButton from "../parts/StickyButton";
import AutoScroll from "../parts/AutoScroll";

const Layout = ({ children }) => {
    return (
        <div className="page">
            <AutoScroll />
            <Nav />
                {children}
            <StickyButton />
            <ToTop />
            <Footer />
        </div>
    );
};

export default Layout;
