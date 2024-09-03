import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow bg-background">
                <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-secondary">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        <div className="md:w-1/2">
                            <img src="/path/to/your/photo.jpg" alt="Xavier the Photographer" className="rounded-lg shadow-lg w-full" />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4 text-primary">Xavier</h3>
                            <p className="text-secondary mb-4">
                                For over a decade, I've been on a journey to capture the breathtaking beauty of our world through my lens. My passion lies in revealing the intricate details of nature, from the graceful flight of birds to the raw power of storms.
                            </p>
                            <p className="text-secondary mb-4">
                                My approach to photography is rooted in patience and respect for my subjects. Whether I'm waiting for hours to capture the perfect moment a rare bird takes flight, or chasing the dramatic formations of storm clouds, I strive to showcase the awe-inspiring aspects of our natural world. In my portrait work, I apply this same dedication to capturing the essence and spirit of each individual.
                            </p>
                            <p className="text-secondary">
                                When I'm not behind the camera, you can find me hiking through forests, studying weather patterns. I'm constantly seeking to deepen my understanding of the subjects I photograph. I'm always excited to take on new projects that challenge me to see the world in new ways and share its beauty with others.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutMe;