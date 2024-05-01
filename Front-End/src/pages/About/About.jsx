import './About.css'
import twitch from '../../assets/ico-twitch-c.svg'
import github from '../../assets/ico-github-c.svg'
import linkedin from '../../assets/ico-linkedin-c.svg'
import spotify from '../../assets/ico-spotify-c.svg'


const About = () => {
  return (
    <>
      <div id="principal">
        <h1 id='aboutus'>About Us</h1>
            <div id='meet'><h3> Let's meet the Sporify Friends' clan</h3></div>
        <div class="about-container">
          <div>
            <div class="elemento">
              <h5>Pablo Santana</h5>
              <div><img src="../src/assets/people01.png" alt="" /> </div>
              <span className='puesto'>Coder</span>
              <div>
                <a href="#">
                  <img className='icon' src={twitch} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={github} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={linkedin} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={spotify} alt="" />
                  </a>
              </div>

              
              </div>
            </div>

            <div class="elemento">
              <h5>Daniel Carretero</h5>
              <div><img src="../src/assets/people01.png" alt="" /> </div>
              <span className='puesto'>Coder</span>
              <div>
                <a href="#">
                  <img className='icon' src={twitch} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={github} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={linkedin} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={spotify} alt="" />
                  </a>
              </div>

            </div>

            <div class="elemento">
              <h5>Freddy Escalada</h5>
              <div><img src="../src/assets/people01.png" alt="" /> </div>
              <span className='puesto'>Coder</span>
              <div>
                <a href="#">
                  <img className='icon' src={twitch} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={github} alt="" />
                  </a>
                <a href="#">
                  <img className='icon' src={linkedin} alt="" />
                  </a>
                <a href="#">
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

