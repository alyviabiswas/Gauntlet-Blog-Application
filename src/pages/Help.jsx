import React from 'react'
import { Container } from '../components';

function Help() {
  return (
    <div className="w-full py-8 mt-4 text-center bg-black">
      <Container>
        <h1 className='text-4xl sm:text-6xl mb-20 text-pink font-serif'>Need Help?</h1>
        <div className='sm: mb-5 flex flex-col justify-center'>

          <p className='text-xl mx-5 text-gray-300'>
            If you need assistance or have any questions, feel free to reach out. We are here to help!

            You can reach out to us via social media for quicker responses. Details are provided below:

            <ul class="flex my-5 space-x-6 justify-center">
              <li>
                <a href="https://github.com/alyviabiswas" class="text-blue-500 hover:text-blue-300" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alyvia-biswas-2907a1253/" class="text-blue-500 hover:text-blue-300" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/alyviabiswas/" class="text-blue-500 hover:text-blue-300" target="_blank">Instagram</a>
              </li>
            </ul>
          </p>
        </div>

      </Container>
    </div>
  )
}

export default Help