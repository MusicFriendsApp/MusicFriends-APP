import './About.css'


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
              </div>
            </div>

            <div class="elemento">
              <h6>Person</h6>
              <div><img src="../src/assets/people01.png" alt="" /> </div>
              <span className='puesto'>Coder</span>
            </div>

            <div class="elemento">
              <h6>Person</h6>
              <div><img src="../src/assets/people01.png" alt="" /> </div>
              <span className='puesto'>Coder</span>
            </div>

        </div>
      </div>
    </>
  );
};

export default About;

