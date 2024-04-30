import React from 'react'
import { DiCss3, } from "react-icons/di";
import { FaGithub,FaHtml5 } from "react-icons/fa";


function Home() {
  return (
    <div className="HomePage">
      <section className="skills bg-gray-100" id="skills">
      <div className="wrapper py-16">
          <div className="subHeadingContainer">
            <h1 className='text-3xl md:text-4xl font-bold'>Skills</h1>
          
          </div>
          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
              <li>
                <FaHtml5 className='text-4xl text-gray-500'></FaHtml5>
                <p className='mt-2'>HTML</p>
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
          
          <FaHtml5></FaHtml5>
          <DiCss3></DiCss3> 
          <FaGithub></FaGithub>

        {
          /* */
        }
        
        </div> {/* .wrapper end */}
      </section> {/* Skills section end */}
    </div>

    
    
  )
}

export default Home