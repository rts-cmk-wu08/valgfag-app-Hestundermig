import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Link to="/shop">Gå til shoppen</Link>
        <Link to="/map">Gå til mappet</Link>
            <h1>Home page</h1>
        </>
     );
};
 
export default Home;