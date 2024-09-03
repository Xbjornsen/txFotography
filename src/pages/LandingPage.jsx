import React from 'react';
import BlogPreview from '../components/BlogPreview';
import PhotoPackages from '../components/Packages';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from './Contact';

// Function to dynamically import images from a folder
const importAll = (r) => {
    return r.keys().map(r);
};

// Import images from folders
const natureImages = importAll(require.context('../assets/images/nature', false, /\.(png|jpe?g|svg)$/));
const buildingsImages = importAll(require.context('../assets/images/buildings', false, /\.(png|jpe?g|svg)$/));
const petsImages = importAll(require.context('../assets/images/pets', false, /\.(png|jpe?g|svg)$/));

const LandingPage = () => {
    // Data for photos and categories
    const photos = [
        ...natureImages.map((src, index) => ({ id: `nature-${index}`, src, category: 'nature' })),
        ...buildingsImages.map((src, index) => ({ id: `buildings-${index}`, src, category: 'buildings' })),
        ...petsImages.map((src, index) => ({ id: `pets-${index}`, src, category: 'pets' })),
    ];

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen">
                <div className="absolute inset-0">
                    <img src={natureImages[0]} alt="Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-background text-center px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-4">Tx Photography</h1>
    <p className="text-xl md:text-2xl mb-8 max-w-2xl">Capturing life's precious moments with artistry and passion</p>
    <button onClick={scrollToContact} className="bg-accent text-background font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
        Book a Session
    </button>
</div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photos.map(photo => (
                            <div key={photo.id} className="group">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img src={photo.src} alt={photo.category} className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-start p-6">
                                        <p className="text-white text-lg font-semibold uppercase tracking-wider">{photo.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                    <button className="bg-primary text-background font-semibold py-3 px-8 rounded-full hover:bg-secondary transition duration-300">
    View Full Gallery
</button>
                </div>
                </div>
            </section>

                    {/* Services Section */}
        <Services />

            {/* Photo Packages Section */}
            <section id="packages">
                <div >
                    <PhotoPackages />
                </div>
            </section>

                    {/* Testimonials Section */}
        <Testimonials />

{/* Blog Preview Section */}
<BlogPreview />


            {/* Contact Section */}
            <section id="contact" className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Contact />
                </div>
            </section>

        </div>
    );
};

export default LandingPage;