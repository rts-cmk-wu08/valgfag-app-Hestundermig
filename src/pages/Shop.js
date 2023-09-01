import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Shop = () => {
  const [notification, setNotification] = useState('');

  const handleBuyClick = () => {
    setNotification('Tak for dit køb! 🛍️');

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('Webshop Notifikation', {
          body: 'Dit køb blev behandlet.',
        });
      });
    }
  };

  useEffect(() => {
    // Registrer servicemedarbejderen
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registreret:', registration);
        })
        .catch((error) => {
          console.log('ServiceWorker registrering fejlede:', error);
        });
    }
  }, []);

  return (
    <>
    <Link to="/">Tilbage til forsiden</Link>
    <div>
      <h2>Velkommen til vores shop</h2>
      <p>Produkt: Super produkt</p>
      <button onClick={handleBuyClick}>Køb</button>
      <p>{notification}</p>
    </div>
    </>
  );
};

export default Shop;