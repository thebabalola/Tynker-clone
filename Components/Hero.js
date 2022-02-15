import React from 'react';
import './Hero.css'
import Image from '../Images/controller.png'
import Image2 from '../Images/tynker-by.png'
import Image3 from '../Images/winter.webp'
import Image4 from '../Images/swosh.svg'
import Image5 from '../Images/markz.png'


const Hero = () => {
    return(
       <>
       <div className='Body'>
         <div className='HeroCon'>
              <img src={Image2} className='Logo'/>
              <div className='Navs'>
                <a className='navPad' href='#'><img src={Image} className='Pad' /> PLAY</a>
                <a className='navPa' href='#'> <b>PARENTS</b></a>
                <a className='navEdu' href='#'> <b>EDUCATORS</b></a>
                <a className='navCode' href='#'> <b>WHY CODE?</b></a>
     
              </div>
           
               <div className='Btn'>
                  <button className='Btn1'> <b>JOIN FOR FREE</b></button>
                   <button className='Btn2'>LOG IN </button>
                 </div>
            </div>

                <div className='SubBody'>
                  <div className='SubHero'>
                      <p className='par'> <b>Coding Made Easy</b></p> 
                      <p className='par1'>The fun to learn programming & develop <br/>
                       problem-solving and critical thinking
                      skills! Ages 5-18</p>

                      <p className='par2'> <b>GET STARTED FOR FREE</b></p>
                      <p className='par3'>At-home plans from <a href='#'>$7.50 per month</a></p>

                  </div>
                    
                     <img src={Image3} className='Snow'/>

                </div>
                <div className='Waver'>
                      <img src={Image4} className='wave'/>
                      </div>

                      

       </div>
       <img src={Image5} className='Help' />
        </>
    );
}
export default Hero