import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navber from '../components/Navber/Navber';
import LeftAside from '../components/LeftAside/LeftAside';
import RightAside from '../components/LeftAside/RightAside';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
<section className='w-11/12 mx-auto my-3'>
    <LatestNews></LatestNews>
</section>

<nav className='w-11/12 mx-auto my-5'>

    <Navber></Navber>
</nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid  grid-cols-12 gap-5'>
               

               <aside className='col-span-3'>
                <LeftAside></LeftAside>
               </aside>
                <section className="main-nav col-span-6">

                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>

                    <RightAside></RightAside>
                </aside>
            </main>

            <footer>
<Footer></Footer>

            </footer>
        </div>
    );
};

export default HomeLayout;