import React from 'react';
import { FaHtml5, FaCss3, FaJsSquare, FaReact } from 'react-icons/fa';

const SampleWork = () => {
  return (
  <div className="bg-red-200">
    <div  id="SampleWork" className="container my-24 mx-auto md:px-6">
    <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">SampleWork</h2>
      <div className="flex justify-center space-x-4">
        <div class=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
            <div className="max-w-sm rounded overflow-hidden shaddow-lg">
              <img className="w-full" src="assets/img/asteroidsgamecard.png" alt="asteroidsgamecard" />
                  <div className="px-6 py-4"></div>
                    <div className="font-bold text-xl mb2"> Asteroids Game  </div>
                      <p className="text-gray-700 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore facilis accusamus blanditiis dolorem vel assumenda perspiciatis eligendi, quis harum, excepturi explicabo consequuntur voluptates sed quae quas, inventore obcaecati rerum.</p>
                   </div>
            <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
              <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
              <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
              <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
            </div>
          </div>
            {/* project 2 */}
          <div className="flex justify-center space-x-4">
            <div class=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
            <div className="max-w-sm rounded overflow-hidden shaddow-lg">
              <img className="w-full" src="assets/img/asteroidsgamecard.png" alt="asteroidsgamecard" />
                  <div className="px-6 py-4"></div>
                    <div className="font-bold text-xl mb2"> Asteroids Game  </div>
                      <p className="text-gray-700 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore facilis accusamus blanditiis dolorem vel assumenda perspiciatis eligendi, quis harum, excepturi explicabo consequuntur voluptates sed quae quas, inventore obcaecati rerum.</p>
                   </div>
            <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
              <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
              <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
              <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
              <i> <FaReact className='text-4xl text-gray-500'></FaReact> </i>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="flex justify-center space-x-4">
            <div class=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
            <div className="max-w-sm rounded overflow-hidden shaddow-lg">
              <img className="w-full" src="assets/img/asteroidsgamecard.png" alt="asteroidsgamecard" />
                  <div className="px-6 py-4"></div>
                    <div className="font-bold text-xl mb2"> Asteroids Game  </div>
                      <p className="text-gray-700 text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore facilis accusamus blanditiis dolorem vel assumenda perspiciatis eligendi, quis harum, excepturi explicabo consequuntur voluptates sed quae quas, inventore obcaecati rerum.</p>
                   </div>
            <div className="px-6 pt-4 pb-2 flex space-x-2 items-center text-center justify-center">
              <i> <FaHtml5 className='text-4xl text-gray-500'></FaHtml5> </i>
              <i> <FaCss3 className='text-4xl text-gray-500'></FaCss3> </i>
              <i> <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare> </i>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-500  justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="./Project.js"> More Projects </a>
        </button>
    </section>
  </div>
</div>
  )
}

export default SampleWork