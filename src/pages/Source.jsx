import React from 'react'
import { Container } from '../components';

function Source() {
  return (
    <div className="w-full py-8 mt-4 text-center bg-black">
                <Container>
                    <h1 className='text-4xl sm:text-6xl mb-20 text-white font-serif'>SOURCE</h1>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>GitHub Repository</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            The code for the entire platform is available on GitHub. Feel free to fork the repository, customize the platform, and contribute to its improvement.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Open-Source Project</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            Our platform is open-source, and you can use or modify it as you see fit, whether for educational purposes or personal projects.
                            </p>
                        </div>
                    <div className='sm: mb-5 flex flex-col justify-center'>
                            <h3 className='sm:text-4xl text-2xl text-pink mb-10 font-serif'>Community Contributions</h3>
                            <p className='text-xl mx-5 text-gray-300'>
                            We encourage developers to participate and improve the platform, whether through bug fixes, new features, or enhancements.
                            </p>
                        </div>
                    
                </Container>
    </div>
  )
}


export default Source