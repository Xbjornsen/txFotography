import React from 'react';
import bjorn from '../assets/images/bjorn.png';
import myPath from '../assets/images/mypath.png';
import realEstate from '../assets/images/realestate.png';
import Footer from '../components/Footer';
import Header from '../components/Header';


const LandingPage = () => {

    // Data for photos and categories
    const photos = [
        { id: 1, src: myPath, category: 'nature' },
        { id: 2, src: realEstate, category: 'buildings' },
        { id: 3, src: bjorn, category: 'pets' },
        // Add more photo objects as needed
    ];
    // Define or import the 'categories' variable
    const categories = ['nature', 'buildings', 'portrait', 'pets'];

    return (
        <div className=' bg-slate-600 bg-cover bg-center h-screen'>
            <Header />
            {/* <div >
                <Slideshow photos={photos} />
            </div> */}
            {/* <div className='flex-1 '>
                <PhotoPackages />
            </div> */}
            <div className="flex-1 mt-8 mb-4 ">
                {/* <CategoryFilter categories={categories} />
                <PhotoGrid photos={photos} /> */}
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
