import React from 'react'
import { FaGithub,FaHtml5, FaCss3, FaReact, FaAccessibleIcon, FaJsSquare, FaNode } from "react-icons/fa";
import { SiTypescript, SiSanity } from "react-icons/si";


function Home() {
  return (
    <div className="HomePage">
      <section className="skills bg-gray-100 " id="skills">
      <div className="wrapper py-16">
          <div className="subHeadingContainer">
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Skills</h1>
          
          </div>
          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
          <li className='flex flex-col items-center'>
                <FaAccessibleIcon className='text-4xl text-gray-500'></FaAccessibleIcon>
                <p className='mt-2'>Accessibility</p>
              </li>
              <li className='flex flex-col items-center'>
                <FaHtml5 className='text-4xl text-gray-500'></FaHtml5>
                <p className='mt-2'>HTML</p>
              </li>
              <li className='flex flex-col items-center'>
                <FaCss3 className='text-4xl text-gray-500'></FaCss3>
                <p className='mt-2'>CSS3</p>
              </li>
              <li className='flex flex-col items-center'>
                <FaJsSquare className='text-4xl text-gray-500'></FaJsSquare>
                <p className='mt-2'>JavaScript</p>
              </li>
              <li className='flex flex-col items-center'>
                <SiTypescript className='text-4xl text-gray-500'></SiTypescript>
                <p className='mt-2'>TypeScript</p>
              </li>
              <li className='flex flex-col items-center'>
                <FaGithub className='text-4xl text-gray-500'></FaGithub>
                <p className='mt-2'>Github</p>
              </li>
              <li className='flex flex-col items-center'>
                <FaReact className='text-4xl text-gray-500'></FaReact>
                <p className='mt-2'>React</p>
              </li><li className='flex flex-col items-center'>
                <SiSanity className='text-4xl text-gray-500'></SiSanity>
                <p className='mt-2'>Sanity</p>
              </li>
              <li className='flex flex-col items-center'>
                <FaNode className='text-4xl text-gray-500'></FaNode>
                <p className='mt-2'>Node</p>
              </li>

          </ul>
          {
            /* Devicon skills go here 
            HTML,
            CSS3,
            JS,
            REACT,
            VUE, 
            ANGULAR
            TAILWIND
            TYPESCRIPT
            */}

        {
          /* */
        }
        
        </div> {/* .wrapper end */}
      </section> {/* Skills section end */}
    </div>

    
    
  )
}

export default Home