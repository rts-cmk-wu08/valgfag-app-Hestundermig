import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import OneSignal from "react-onesignal";


const App = () => {

  // useEffect(() => {
  //   OneSignal.init({appId: process.env.REACT_APP_ONESIGNAL})
  // }, []);

  return (
    <>
    <header>
      <p>Header</p>
    </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </>
   );
};
 
export default App;