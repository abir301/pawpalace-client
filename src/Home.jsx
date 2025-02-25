import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import Loading from './Components/Loading';
import { authContext } from './Authprovider';
import { Helmet } from 'react-helmet';

const Home = () => {
    const { loader } = useContext(authContext);

    if (loader) {
        return <Loading />;
    }
    return (
        <div>
            <Toaster />
            <Helmet><title>Home | PawPalace</title></Helmet> 
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
