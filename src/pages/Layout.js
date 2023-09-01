import { Outlet } from "react-router-dom";
import style from 'style.css';

const Layout = () => {
    return ( 
        <>
            <header class="hf">
                <p class="hf-text">Sej header</p>
            </header>
            <main>
                <Outlet />
            </main>
            <footer class="hf">
                <p class="hf-text">Sej footer</p>
            </footer>
        </>
    )
}
 
export default Layout;