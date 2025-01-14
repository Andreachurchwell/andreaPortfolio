import React, { useState } from 'react';
import './contactMe.css'; // Import CSS for styling

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message submitted!'); // Placeholder for form submission logic
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div id='contactMain'>
            <div className='contact-me-container'>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                        className='input-field'
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        value={formData.email}
                        onChange={handleChange}
                        className='input-field'
                    />
                    <input
                        type='text'
                        name='phone'
                        placeholder='Your Phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='input-field'
                    />
                    <input
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className='input-field'
                    />
                    <textarea
                        name='message'
                        placeholder='Your Message'
                        value={formData.message}
                        onChange={handleChange}
                        className='input-field'
                    />
                    <button type='submit' className='submit-btn'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;