import React from 'react' 
import './frontpage.scss'
import image from '../../images/IMG_0840.jpg'
export function FrontPage () {
    return (
        <article className="intro-section" id="front-nav">
                <img src={image} alt="me"/>
                <div>
                    <h3>Intro</h3>
                    <p>Hey, my name is Oliver Juul, I'm 22 years old, and currently studying web development at Aalborg Techcollege.
                        This page will act as a Portfolio/CV. 
                        <br/>
                        <br/>
                        I will update it with time and it will most likely see some changes. 
                    </p>
                </div>
        </article>
    )
}