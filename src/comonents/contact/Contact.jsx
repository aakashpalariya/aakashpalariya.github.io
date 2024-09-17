import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const CustomToast = ({ message }) => {
        let className = 'toast_hot';
        return <div className={className}>{message}</div>;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rrph65o', 'template_gyd19qx', form.current, {
                publicKey: 'x0wxEWfFjfQ_XA2RS',
            })
            .then(
                () => {
                    toast.custom(<CustomToast message="✅ Mail Sent Successfully." />, {
                    });
                },
                (error) => {
                    toast.custom(<CustomToast message="❎ Some Error Occured!." />, {
                    });
                },
            );
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch</span>
            <div className="container contact_container grid">

                <div>
                    <div className="contact_info">
                        <i className="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">8954 6346 20</span>
                        </div>
                    </div>

                    <div className="contact_info">
                        <i className="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">aakashpalariya@hotmail.com</span>
                        </div>
                    </div>

                    <div className="contact_info">
                        <i className="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">Noida, Uttar Pradesh</span>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact_form grid">
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label className="contact_label">Name</label>
                            <input required type="text" placeholder="Your name" name="user_name" className="contact_input"></input>
                        </div>
                        <div className="contact_content">
                            <label className="contact_label">Email</label>
                            <input required type="email" placeholder='Your email' name="user_email" className="contact_input"></input>
                        </div>
                    </div>

                    <div className="contact_content">
                        <label className="contact_label">Message</label>
                        <textarea placeholder='Enter your message here...' name="user_message" id="" cols="0" rows="7" className="contact_input"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="button btn button-flex">
                            Send Message
                            <i className="uil uil-message button button-icon"></i>
                        </button>
                    </div>
                </form>
            </div>
            <Toaster />

        </section>
    )
}

export default Contact