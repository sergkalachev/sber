import React from 'react';
import './Header.css';
const Header = ({ logoSrc, title }) => {
    return (React.createElement("header", { className: "header" },
        React.createElement("img", { src: logoSrc, alt: "Logo", className: "logo" }),
        React.createElement("h2", { className: "header-title" }, title),
        React.createElement("div", { className: 'socials' })));
};
export default Header;
