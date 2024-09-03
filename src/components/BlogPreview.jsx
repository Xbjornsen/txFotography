import React from 'react';

const BlogPreview = () => {
    const blogPosts = [
        { title: 'Top 5 Tips for Storm Photography', excerpt: 'Learn how to capture stunning storm images safely...', image: '/path/to/storm-blog.jpg', date: 'June 15, 2023' },
        { title: 'Behind the Scenes: A Day in Nature', excerpt: 'Join me on a typical day shooting landscapes...', image: '/path/to/nature-blog.jpg', date: 'May 28, 2023' },
        { title: 'Essential Gear for Wildlife Photography', excerpt: 'Discover the equipment I use for capturing wildlife...', image: '/path/to/wildlife-blog.jpg', date: 'May 10, 2023' },
    ];

    return (
<section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">From the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <div key={index} className="bg-neutral rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-secondary">{post.title}</h3>
                        <p className="text-secondary mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-primary">{post.date}</span>
                            <button className="text-accent hover:underline">Read More</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <button className="bg-primary text-background font-semibold py-3 px-8 rounded-full hover:bg-secondary transition duration-300">
                View All Posts
            </button>
        </div>
    </div>
</section>
    );
};

export default BlogPreview;