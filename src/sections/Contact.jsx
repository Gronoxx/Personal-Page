import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";
import {useState} from "react";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);       

        try{

        await emailjs.send("service_t6d7s3s", "template_bjle5we",
            {
                from_name: form.name,
                to_name: 'Gustavo',
                from_email: form.email,
                to_email: 'gus.apolinario@hotmail.com',
                message: form.message
            },
            'e1q4NSSQRp83_a5wZ'
        )

        setLoading(false);

        alert('Your message has been sent!')

        setForm({
            name: '',
            email:'',
            message: ''
        });

        } catch(error){
            setLoading(false);
            
            console.log(error);

            alert('Something went wrong!')

        }
    
    }

  return (

    <section className="c-space my-20" id="contact">
    <div className="relative min-h-[110vh] flex items-center justify-center flex-col">
        <img 
            src="/assets/terminal.png" 
            alt="terminal background" 
            className="absolute inset-0 w-full h-full" 
        />
        <div className="contact-container z-10 p-10">
            <h3 className="head-text text-white">Let's talk</h3>
            <p className="text-lg text-white mt-3">
            Looking a versatile developer passionate about learning and turning ideas into reality? From back-end systems to front-end projects like this page, I’m here to help. Let’s create something great together!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                <label className="space-y-3">
                    <span className="field-label">Full Name</span>
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        required 
                        className="field-input"
                        placeholder="John Doe"
                    />
                </label>

                <label className="space-y-3">
                    <span className="field-label">Email</span>
                    <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        required 
                        className="field-input"
                        placeholder="johndoe@gmail.com"
                    />
                </label>

                <label className="space-y-3">
                    <span className="field-label">Your message</span>
                    <textarea
                        name="message" 
                        value={form.message} 
                        onChange={handleChange} 
                        required
                        rows={5} 
                        className="field-input"
                        placeholder="Hi, I'm interested in..."
                    />
                </label>

                <button className="field-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending' : 'Send Message'}
                    <img src="/assets/arrow-up.png" className="field-btn_arrow" />
                </button>
            </form>
        </div>
    </div>
</section>

  )
}

export default Contact
