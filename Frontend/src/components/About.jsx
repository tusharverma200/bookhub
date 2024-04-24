import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-12 px-4 py-8 ">
            <h1 className="text-3xl font-bold mb-4 text-center text-white">About Us</h1>
            <p className="mb-4 text-lg leading-relaxed text-white">
                Welcome to <span className="font-semibold">BookHub</span>, your go-to destination for a vast collection of e-books across various genres. Our platform offers instant access to thousands of e-books that you can download and enjoy on your preferred device. We pride ourselves on our user-friendly interface and personalized recommendations to help you discover new authors and books tailored to your taste.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-white">
                Our mission is to provide a comprehensive digital library that caters to all readers. Whether you're an avid book lover, a student seeking research materials, or someone who enjoys a good story, our e-library has something for everyone. Join our community of readers to participate in discussions and share reviews, enriching your reading experience with insights from fellow book enthusiasts.
            </p>
            <p className="text-lg leading-relaxed text-white">
                At <span className="font-semibold">BookHub</span>, we're committed to offering high-quality digital content that you can access anytime, anywhere. Sign up today and start your literary journey with us!
            </p>
            <div className="contact-info mt-6">
                <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                <p className="text-lg text-white">Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
                <p className="text-lg text-white">Address: XYZ Nagar, New Delhi, 202220 </p>
            </div>
        </div>
    );
};

export default AboutUs;
