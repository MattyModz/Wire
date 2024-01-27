import Nav from "./nav";
import React from "react";
const Header = () => {
  return (
    <>
      <head>
        <title>Mike Electrical</title>
        <link rel="stylesheet" href="../src/styles/index.scss" />
        <link rel="icon" href="./logo.png"></link>

        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
        rel="stylesheet"
      />
      <Nav />
    </>
  );
};

export default Header;
