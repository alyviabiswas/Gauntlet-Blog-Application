import React from 'react';
import { Container } from '../components';

function Features() {
  return (
    <div className="w-full py-8 mt-4 text-center bg-black">
                <Container>
                    <h1 className='text-4xl sm:text-6xl mb-20 text-white font-serif'>FEATURES</h1>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Interactive Blog Platform</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Explore engaging blogs on topics surrounding AI and human creativity, offering a diverse range of ideas and opinions.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>User-Friendly Interface</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            A sleek, easy-to-navigate interface where readers and bloggers alike can seamlessly browse and contribute content.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Responsive Design</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Fully responsive website design built with React, Tailwind CSS, and JavaScript for a smooth user experience across devices.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Blog Submission</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Simple and intuitive blog submission process that allows anyone to contribute their thoughts on AI and human creativity.
                            </p>
                        </div>
                </Container>
    </div>
  )
}

export default Features