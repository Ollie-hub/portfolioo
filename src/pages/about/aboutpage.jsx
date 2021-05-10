import React from 'react' 
import "./about.scss"
import image  from '../../images/image0.jpg'
import cv from '../../Oliver_Juul_CV.rar'

export function AboutPage () {
    return (
        <article className="about-section">
            <h3>About Me</h3> <section>  
                <div className="about-content" id="about-nav">
                    <span>
                        <p>
                        Hey, my name is Oliver Juul, I'm 22 years old, and currently studying web development at Aalborg Techcollege.
                        I previously studied ICT in Norway. And inbetween moving back to Denmark and starting at Aalborg Techcollege, 
                        i took 6 months in New York city. 
                        <br/><br/> 
                        What's my future goal? I want to work in Web/Software development. Where that might be i don't know yet. 
                        <br/><br/><br/>
                        My CV <a href={cv}>Download</a>
                        </p>
                    </span> 
                    <img src={image} alt="me"/>
                </div> 
            </section>
        </article>
    )
}