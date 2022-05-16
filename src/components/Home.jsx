import React, {useState} from "react";
import "./home.scss";

// Components
import Buttons from "./Button";

// Images & Icons
import prodilImage from '../img/profilPic.png'
import { BsMouse } from 'react-icons/bs';


function Home() {

    const [ toggle, setToggle ] = useState(false);

    function toggleClassName() {
        setToggle(!toggle)
    }
    
    return (
        <div className="home-container">
            <div className="profilPic" onClick={toggleClassName}>
                <div className={ toggle ? 'hover-show active' : 'hover-show' }>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src={prodilImage} alt="ProfilBild" />
            </div>

            <a href='#footer' className='scroll-down'>
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a>

            <div className="about-me">
                <h2>Über mich</h2>
                <p>
                    Ich finde es schwer über sich selbst zu schreiben. Daher wird dieses Feld erst ausgefüllt, wenn alles andere fertig ist.
                </p>
            </div>

            <Buttons />
        </div>
    )
}

export default Home;