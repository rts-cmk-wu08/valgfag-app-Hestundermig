import React from 'react';
import { Link } from "react-router-dom";

import OneSignal from "react-onesignal";

const Shop = () => {

    const notiClick = () => {
          OneSignal.init({appId: process.env.REACT_APP_ONESIGNAL})
    }

  return (
    <>
    <Link to="/">Tilbage til forsiden</Link>
    <div>
      <h2>Shop</h2>
      <p>Produkt</p>
      <button onClick={notiClick}>Køb</button>
    </div>
    </>
  );
};

export default Shop;