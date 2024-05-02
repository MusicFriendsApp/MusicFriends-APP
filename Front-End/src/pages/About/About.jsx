import './About.css'
import twitch from '../../assets/ico-twitch-c.svg'
import github from '../../assets/ico-github-c.svg'
import linkedin from '../../assets/ico-linkedin-c.svg'
import spotify from '../../assets/ico-spotify-c.svg'


const About = () => {
  return (
    <>
      <div id="principal">
        <h1 id='about-us'>ABOUT US</h1>
        <div id='meet'><h3> LET'S MEET THE DEVS</h3></div>
        <div className="about-container">
          <div>
            <div className="about-card">
              <h2>Pablo Santana</h2>
              <div><img className="about-us-avatar" src="../src/assets/kurayamiface.jpg" alt="" /> </div>
              <span className='title-job'>Fullstack Web Developer</span>
              <div>
                <a href="https://www.twitch.tv/darkown3r" target='_blank'>
                  <img className='icon' src={twitch} alt="" />
                  </a>
                <a href="https://github.com/DarkOwn3r" target='_blank'>
                  <img className='icon' src={github} alt="" />
                  </a>
                <a href="https://www.linkedin.com/in/pablo-santana-ojeda/" target='_blank'>
                  <img className='icon' src={linkedin} alt="" />
                  </a>
                <a href="https://open.spotify.com/user/1115344794?si=ce62467c251f4b0b" target='_blank'>
                  <img className='icon' src={spotify} alt="" />
                  </a>
              </div>

              
              </div>
            </div>

            <div className="about-card">
              <h2>Daniel Carretero</h2>
              <div><img className="about-us-avatar" src="../src/assets/people01.png" alt="" /> </div>
              <span className='title-job'>Fullstack Web Developer</span>
              <div>
                <a href="#" target='_blank'>
                  <img className='icon' src={twitch} alt="" />
                  </a>
                <a href="https://github.com/dcarrete" target='_blank'>
                  <img className='icon' src={github} alt="" />
                  </a>
                <a href="#" target='_blank'>
                  <img className='icon' src={linkedin} alt="" />
                  </a>
                <a href="#" target='_blank'>
                  <img className='icon' src={spotify} alt="" />
                  </a>
              </div>

            </div>

            <div className="about-card">
              <h2>Freddy Escalada</h2>
              <div><img className="about-us-avatar" src="../src/assets/people01.png" alt="" /> </div>
              <span className='title-job'>Fullstack Web Developer</span>
              <div>
                <a href="#" target='_blank'>
                  <img className='icon' src={twitch} alt="" />
                  </a>
                <a href="https://github.com/tajamajaka" target='_blank'>
                  <img className='icon' src={github} alt="" />
                  </a>
                <a href="#" target='_blank'>
                  <img className='icon' src={linkedin} alt="" />
                  </a>
                <a href="#" target='_blank'>
                  <img className='icon' src={spotify} alt="" />
                  </a>
              </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default About;

