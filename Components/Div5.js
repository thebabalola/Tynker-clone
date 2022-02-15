import React from 'react'
import "./Div5.css"
import Apple from '../Images/logo-apple.png'
import Google from '../Images/logo-googleedu.png'
import Microsoft from '../Images/logo-microsoft.png'
import Pbs from '../Images/logo-pbs.png'
import Bbc from '../Images/logo-bbc-learning.png'
import Facebook from '../Images/logo-facebook.png'
import Lego from '../Images/logo-lego.png'
import Minecraft from '../Images/logo-mc.png'
import Mattel from '../Images/logo-mattel.png'
import Hot from '../Images/logo-hotwheels.png'
import Barbie from '../Images/logo-barbie.png'

function Tdiv2(){
    return(
        <div class="mainContainer">
            <div class="textTdiv">
            <h1>Trusted by Leading Brands</h1>
                <p>Our methods for learning to code all are provided within a safe, moderated community that is built <br></br> around encouraging students to gain confidence in their abilities and do so without fear of failure.</p>
            </div>
            <div class="tdivImg">
                <img class="tImg" src={Apple}></img>
                <img class="tImg" src={Google}></img>
                <img class="tImg" src={Microsoft}></img>
                <img class="tImg" src={Pbs}></img>
                <img class="tImg" src={Bbc}></img>
                <img class="tImg" src={Facebook}></img>
            </div>
                <div class="tdivImg2">
                <img class="tImg2" src={Lego}></img>
                <img class="tImg2" src={Minecraft}></img>
                <img class="tImg2" src={Mattel}></img>
                <img class="tImg2" src={Hot}></img>
                <img class="tImg2" src={Barbie}></img>
            </div>
        </div>
    )
}

export default Tdiv2