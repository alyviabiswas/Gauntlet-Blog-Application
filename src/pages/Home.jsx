import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView hook
import service from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    // Animation Variants
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    // Refs to track visibility
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    // Check if sections are in view
    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });
    const inView4 = useInView(ref4, { once: true });

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-black">
                <Container>
                    <h1 className='text-4xl sm:text-6xl mb-20 text-white font-serif'>Gauntlet: Innovation vs. Imitation</h1>

                    {/* Section 1 - Slide from Left */}
                    <motion.div 
                        ref={ref1}
                        className='flex flex-col sm:flex-row gap-10 mb-20' 
                        initial="hidden" 
                        animate={inView1 ? "visible" : "hidden"}
                        variants={slideInLeft}
                    >
                        <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-5xl text-2xl text-pink mb-10 font-serif'>Discover ideas</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Welcome to Gauntlet.com, where AI meets Human Ingenuity! Step into a world where technology meets talent. Here you can share groundbreaking insights, debate the future of technology, or challenge conventional thinking. Gauntlet.com is the arena for bold ideas.
                            </p>
                        </div>
                        <div className='sm:w-1/3 flex flex-col justify-center'>
                            <img src="/home-page-1.webp" className='rounded-xl' alt="" />
                        </div>
                    </motion.div>

                    {/* Section 2 - Slide from Right */}
                    <motion.div 
                        ref={ref2}
                        className='flex flex-col sm:flex-row-reverse gap-10 mb-20' 
                        initial="hidden" 
                        animate={inView2 ? "visible" : "hidden"}
                        variants={slideInRight}
                    >
                        <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-5xl text-2xl text-pink mb-10 font-serif'>About Gauntlet</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            At Gauntlet.com, we believe the future is not just something to watch—it is something to shape. This platform is built for bold minds and fearless thinkers who want to explore the intersection of AI and human potential. We provide a space for researchers, professionals, and enthusiasts to share insights, discuss advancements, and analyze the evolving relationship between technology and human intelligence.
                            </p>
                        </div>
                        <div className='sm:w-1/3 flex flex-col justify-center'>
                            <img src="/home-page-2.webp" className='rounded-xl' alt="" />
                        </div>
                    </motion.div>

                    {/* Section 3 - Slide from Left */}
                    <motion.div 
                        ref={ref3}
                        className='flex flex-col sm:flex-row gap-10 mb-20' 
                        initial="hidden" 
                        animate={inView3 ? "visible" : "hidden"}
                        variants={slideInLeft}
                    >
                        <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-5xl text-2xl text-pink mb-10 font-serif'>Our Mission</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            At Gauntlet.com, we are on a mission to cultivate a community of curious minds and innovative thinkers dedicated to exploring the relationship between AI and human potential. We believe in the power of shared knowledge and collaboration to ignite conversations that drive meaningful change. Together, we aim to inspire new ideas and challenge the norms as we navigate the future of intelligence.
                            </p>
                        </div>
                        <div className='sm:w-1/3 flex flex-col justify-center'>
                            <img src="/home-page-3.jpeg" className='rounded-xl' alt="" />
                        </div>
                    </motion.div>

                    {/* Section 4 - Slide from Right */}
                    <motion.div 
                        ref={ref4}
                        className='flex flex-col sm:flex-row-reverse gap-10 mb-20' 
                        initial="hidden" 
                        animate={inView4 ? "visible" : "hidden"}
                        variants={slideInRight}
                    >
                        <div className='sm:w-2/3 mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-5xl text-2xl text-pink mb-10 font-serif'>Want to Get Involved?</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Join the vibrant community at Gauntlet.com and make your voice heard! Whether you're an experienced writer or just starting your blogging journey, there are countless ways to contribute. Share your unique insights on AI and human capabilities by writing blog posts. Your participation is key to fostering meaningful conversations that challenge conventional thinking and shape the future of intelligence.
                            </p>
                        </div>
                        <div className='sm:w-1/3 flex flex-col justify-center'>
                            <img src="/home-page-4.webp" className='rounded-xl' alt="" />
                        </div>
                    </motion.div>

                    <p className='text-xl mt-30'>Thank you for visiting Gauntlet. Get involved today, and let us push the boundaries together!</p>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-black">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
