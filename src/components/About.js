import React from 'react'

function About() {
  return (
    <div className='about-section'>
      <section className="profile bg-gray-100" id="profile">
            <div className="wrapper py-16">
                <div className="subHeadingContainer">
                    <h4 className="text-gray-600">more about me</h4>
                    <h2 className="text-3xl md:text-4xl font-bold">Profile</h2>
                </div>
                <ul className="profileList mt-8">
                    <li className="profileListItem aboutMeItem">
                        <div className="itemHeadingContainer flex items-center">
                            <h3 className="mr-2">About Me</h3>
                            <i className="icon-user"></i>
                        </div>
                        <p className="mt-4">
                            I am a creative and analytical web developer driven to build accessible, user-friendly
                            applications through clean, responsive, and organized code.
                        </p>
                        {/* Include other paragraphs */}
                    </li>
                    {/* Include other list items */}
                </ul>
                <form className="profileForm mt-8">
                    <fieldset className="profileNavFieldset">
                        <legend className="sr-only">Choose an option to learn more about me</legend>
                        <input type="radio" name="profileNav" id="profileAboutMe" className="sr-only" value="aboutMe" checked />
                        <label htmlFor="profileAboutMe" className="profileFormIcon cursor-pointer" tabIndex="0">
                            <i className="icon-user"></i>
                        </label>
                        {/* Include other radio buttons */}
                    </fieldset>
                </form>
                <p className="profileInstructions mt-4">
                    Click the icons above to learn a bit more about me or use the buttons below to message me or request my resume.
                </p>
                <div className="linksContainer mt-4">
                    <a href="#contact" className="messageMe profileLink mr-4">Message Me</a>
                    <a href="#contact" className="requestResume profileLink">Request Resume</a>
                </div>
            </div>
        </section>
    </div>
    );
};

export default About