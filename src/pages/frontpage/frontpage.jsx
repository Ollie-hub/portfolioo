import React from 'react'
import './frontpage.scss'
import image from '../../images/IMG_0840.jpg'
export function FrontPage() {
    return (
        <article className="intro-section" id="front-nav">
            <img src={image} alt="me" />
            <div>
                <h3>Intro</h3>
                <p>Hey, my name is Oliver Juul, I'm 22 years old, and currently studying web development at Aalborg Techcollege.
                    This page will act as a Portfolio/CV.
                    <br />
                    <br />
                    For this portfolio I'm using React. Which is a framework built on javascript. I will try my best to update this page as much as i can to show my growing knowledge.
                </p>
            </div>
        </article>
    )
}