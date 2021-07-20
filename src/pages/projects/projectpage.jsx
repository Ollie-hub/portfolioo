import React from 'react'
import "./projects.scss";
import urbanimg from '../../images/urban.PNG'
import image from '../../images/article.jpg'

export function ProjectPage() {
    return (
        <div>
            <section className="project-section" id="project-nav">
                <h2>Projects</h2>
                <article>
                    <div className="project-1">
                        <img src={image} alt="Project 1" />
                        <div className="project-info">
                            <h3>Welder App</h3>
                            <p>Currently I'm working on a personalized app for the welders on the school. It's being build using Ionic framework, which uses typescript.</p>
                            <a href="#">Click here to see the project</a>
                        </div>
                    </div>
                    <div className="project-2">
                        <div className="project-info">
                            <h3>Urban Explorer</h3>
                            <p>Urban Explorer was a group project we had that involved making a progressive webapp. My group used Ionic framework to make the app.</p>
                            <a href="#">Click here to see the project</a>
                        </div>
                        <img src={urbanimg} alt="Project 2" />
                    </div>
                </article>
            </section>

        </div>
    )
}