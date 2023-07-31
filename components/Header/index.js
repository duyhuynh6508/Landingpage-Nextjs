import React, { useState } from "react";
import Head from "next/head";


const Header = ({headerName}) => {
  return (
    <Head>
      <title>TMA Insurance | {headerName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/InsuranceLogo.png" />
    </Head>
  );
};

export default Header;
