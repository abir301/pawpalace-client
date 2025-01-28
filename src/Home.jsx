
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Toaster/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;