import React from 'react' 
import "./projects.scss";
import urbanimg from '../../images/urban.PNG'
import image from '../../images/article.jpg'

export function ProjectPage () {
    return (
        <div>
            <section className="project-section" id="project-nav">
                <h2>Projects</h2>
                <article>
                    <div className="project-1"> 
                       
                        <img src={image} alt="Project 1" />
                        <div className="project-info">
                        <h3>Bakery</h3>
                        <p>One of the projects we had on react this year was for a bakery. It was the first time we did a full scale project in React App.</p>
                        </div>
                    </div>
                    <div className="project-2"> 
                        <div className="project-info">
                        <h3>Urban Explorer</h3>
                        <p>Urban Explorer was a group project we had that involved making a progressive webapp. My group used Ionic framework to make the app.</p> 
                        </div>
                        <img src={urbanimg} alt="Project 2"/>
                    </div>
                </article>
            </section>

        </div>
    )
}