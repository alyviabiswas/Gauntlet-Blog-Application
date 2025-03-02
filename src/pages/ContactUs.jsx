import React from 'react'
import { Container } from '../components';

function ContactUs() {
  return (
    <div className="w-full py-8 mt-4 text-center bg-black">
      <Container>
        <h1 className='text-4xl sm:text-6xl mb-20 text-pink font-serif'>CONTACT US</h1>
        <div className='sm: mb-5 flex flex-col justify-center'>
          <p className='text-xl mx-5 text-gray-300'>
            If you prefer to send us a direct email, feel free to drop us a message at:
            <a href="mailto:alyvia02510@gmail.com" className="text-blue-500 hover:text-blue-300">
              &nbsp;alyvia02510@gmail.com
            </a>
          </p>
        </div>

      </Container>
    </div>
  )
}

export default ContactUs