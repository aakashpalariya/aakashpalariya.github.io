import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 class="section_title">Contact Me</h2>
            <span class="section_subtitle">Get in touch</span>

            <div class="container contact_container grid">
                <div>
                    <div class="contact_info">
                        <i class="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Call Me</h3>
                            <span class="contact_subtitle">8954 6346 20</span>
                        </div>
                    </div>

                    <div class="contact_info">
                        <i class="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Email</h3>
                            <span class="contact_subtitle">aakashpalariya@hotmail.com</span>
                        </div>
                    </div>

                    <div class="contact_info">
                        <i class="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Location</h3>
                            <span class="contact_subtitle">Noida, Uttar Pradesh</span>
                        </div>
                    </div>
                </div>

                <form action="" class="contact_form grid">
                    <div class="contact_inputs grid">
                        <div class="contact_content">
                            <label for="" class="contact_label">Name</label>
                            <text type="text" class="contact_input"></text>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Email</label>
                            <text type="email" class="contact_input"></text>
                        </div>
                    </div>

                    <div class="contact_content">
                        <label for="" class="contact_label">Message</label>
                        <textarea name="" id="" cols="0" rows="7" class="contact_input"></textarea>
                    </div>

                    <div>
                        <a href="#" class="button button-flex">
                            Send Message
                            <i class="uil uil-message button button-icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact