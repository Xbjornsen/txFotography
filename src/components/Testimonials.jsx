import React from 'react';
import jane from '../assets/images/people/jane.png';
import john from '../assets/images/people/john.png';
import mike from '../assets/images/people/mike.png';

const Testimonials = () => {
    const testimonials = [
        { name: 'John Doe', text: 'Xavier\'s storm photography is absolutely breathtaking. He captured moments I never thought possible.', image: john },
        { name: 'Jane Smith', text: 'Working with Xavier for our wedding was a dream. He has an eye for detail and made us feel so comfortable.', image: jane },
        { name: 'Mike Johnson', text: 'The corporate event photos Xavier took for us were perfect. Professional, high-quality, and delivered on time.', image: mike },
    ];
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">What My Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                <span className="font-semibold">{testimonial.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;