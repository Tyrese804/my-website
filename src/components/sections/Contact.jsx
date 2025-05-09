import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from 'emailjs-com'

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Oops! Something went wrong. Try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="w-full px-4 max-w-[90%] sm:w-150 lg:w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" value={formData.name} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5" placeholder="Name..." onChange={(e) => setFormData({...formData, name: e.target.value})}/>

                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" value={formData.email} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5" placeholder="example@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>

                    </div>

                    <div className="relative">
                        <textarea id="message" name="message" value={formData.message} required rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5" placeholder="Your message..." onChange={(e) => setFormData({...formData, message: e.target.value})}/>

                    </div>

                    <button type="submit" className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(191,25,26,0.4)]">
                        Send Message
                    </button>
                </form>

            </div>
            </RevealOnScroll>
        </section>
    )
}