// src/components/Contact.js
"use client"
import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Contact/firebase"; // firebase.js path ঠিক রাখো

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: new Date()
            });

            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });

        } catch (error) {
            console.error("Error adding document: ", error.message);
            alert("Failed to send message: " + error.message);
        }
    };

    return (
        <section className='container mx-auto md:relative md:-top-[150px] md:px-0 px-2'>
            <form onSubmit={handleSubmit} className='w-[90%] mx-auto bg-white shadow-xl rounded-xl py-20 md:px-[130px] px-5 md:border-t-0 border-t-2'>
                <div className="md:flex justify-between">
                    <div className="md:w-[49%]">
                        <label htmlFor="name">Name</label> <br />
                        <input
                            className='border border-blue-400 p-2 rounded-lg shadow-lg w-full mt-2'
                            type="text"
                            name="name"
                            placeholder='Type Name..'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="md:w-[49%]">
                        <label htmlFor="email">Email</label> <br />
                        <input
                            className='border border-blue-400 p-2 rounded-lg shadow-lg w-full mt-2'
                            type="email"
                            name="email"
                            placeholder='Type Email..'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <label htmlFor="subject">Subject</label> <br />
                    <input
                        className='border border-blue-400 p-2 rounded-lg shadow-lg w-full mt-2'
                        type="text"
                        name="subject"
                        placeholder='Your Subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="message">Message</label> <br />
                    <textarea
                        className='border border-blue-400 p-2 rounded-lg shadow-lg w-full mt-2 h-[250px]'
                        name="message"
                        placeholder='Type your message...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className='border border-blue-400 py-2 px-5 text-white bg-gradient-to-r from-[#307BC4] to-[#274760] rounded-full mt-10 flex gap-2 items-center cursor-pointer ' title='Send message'>
                    Submit <FaLongArrowAltRight />
                </button>
            </form>
        </section>
    );
};

export default Contact;
