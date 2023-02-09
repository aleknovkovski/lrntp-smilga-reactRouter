import {Link, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className='section'>
            <Navbar />
            <Outlet />
        </section>
    );
};
export default Home;
