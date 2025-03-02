import React from 'react';
import { Container } from '../components';

function Developer() {
  return (
    <div className="w-full py-8 mt-4 text-center bg-black">
                <Container>
                    <h1 className='text-4xl sm:text-6xl mb-20 text-white font-serif'>DEVELOPER</h1>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Built with React</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Our frontend is powered by React, ensuring a fast and dynamic user experience with smooth transitions and component-based architecture.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Appwrite Backend</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            We use Appwrite to handle our backend, providing secure authentication, real-time database, and file storage for all our users and blog posts.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Frontend Customization</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            With Tailwind CSS, we’ve built a fully customizable and responsive design to provide a seamless experience on any device.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Open for Contributions</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Interested in contributing to the project? Check out our GitHub for open-source code and documentation to help you get started!
                            </p>
                        </div>
                </Container>
    </div>
  )
}

export default Developer