import React from "react";

import "./PageHeader.css";

const PageHeader = ({ title }) => {
  return (
    <div className="PageHeader">
      <img src="/vectors/header-logo.svg" alt="header-icon" />
      <span className="header-title">{title}</span>
      <div className="wrapper">
        <span>Home</span>
        <img src="/vectors/forward-arrow.svg" alt="arrow-icon" />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default PageHeader;
