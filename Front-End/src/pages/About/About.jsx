import './About.css'
import twitch from '../../assets/ico-twitch.svg'
import github from '../../assets/ico-github.svg'
import linkedin from '../../assets/ico-linkedin.svg'
import spotify from '../../assets/ico-spotify.svg'


const About = () => {
  return (
    <>
      <div id="principal">
        <h1 id='aboutus'>About Us</h1>
        <div class="about-container">
            <div id='meet'><h4> Let's meet the Sporify Friends' clan</h4></div>
          <div>
            <div class="elemento">
              <h6>Person</h6>
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
              <h6>Person</h6>
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
              <h6>Person</h6>
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

