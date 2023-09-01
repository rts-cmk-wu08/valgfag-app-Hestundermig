import { Outlet } from "react-router-dom";

const App = () => {
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