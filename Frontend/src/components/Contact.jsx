import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const ContactUs = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        console.log(userInfo)
        await axios
            .post("http://localhost:4001/query", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Message sent successfully");

                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    //  setTimeout(() => { }, 2000);
                }
            });
    };

    return (
        <div className="container mx-auto px-4 py-8 my-12">
            <h1 className="text-3xl font-bold mb-4 text-center text-white">Contact Us</h1>
            <p className="mb-4 text-lg leading-relaxed text-white">
                We'd love to hear from you! Whether you have questions about our e-library, need assistance, or just want to share feedback, feel free to get in touch.
            </p>
            <div className="contact-info mb-4">
                <h2 className="text-2xl font-semibold mb-2">Our Contact Details</h2>
                <p className="text-lg text-white">Email: <a href="mailto:contact@yourlibrary.com" className="text-blue-500">contact@yourlibrary.com</a></p>
                <p className="text-lg text-white">Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
            </div>
            <div className="contact-form">
                <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-lg text-white mb-1" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-white mb-1" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg text-white mb-1" htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows="5"
                            {...register("message", { required: "Message is required" })}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;
