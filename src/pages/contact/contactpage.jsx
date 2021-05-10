import React from 'react' 
import "./contact.scss"

export function ContactPage () {
    return (
        <form className="contact-section" id="contact-nav">
            <h2>Contact</h2>
            <section className="form-section">
                <div className="input-section">
                    <label htmlFor="name">Name</label>
                    <input type="Name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" />
                    <label>Topic</label>
                    <input type="text" />
                <div className="button-section">
                    <button type="submit">Submit</button>
                    <button type="reset">reset</button>
                </div>
                </div>
                    <textarea name="Input" id="" cols="30" rows="10"></textarea>
            </section>
        </form>
    )
}