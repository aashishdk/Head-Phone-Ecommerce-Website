import React from 'react'
import aboutImage from '../assets/manwheadphone.jpg';


const About = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white mt-16 px-10 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10"> 
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={aboutImage} alt="About Us" className="w-[500px] h-[550px]" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-600 tracking-wide mb-6 ">Like You, We Also Love Music</h1>
          <p className="text-justify mt-4 pr-10 leading-7 text-gray-600 dark:text-gray-300">AHeadphones is a leading online retailer of headphones, earphones, and audio accessories. We are passionate about music and committed to providing our customers with the best audio experience possible. Our mission is to help you find the perfect headphones that suit your style, budget, and listening preferences.</p>
          <p className="text-justify mt-4 pr-10 leading-7 text-gray-600 dark:text-gray-300">At AHeadphones, we offer a wide range of products from top brands, ensuring that you have access to the latest technology and trends in the audio world. Whether you're a casual listener, a gamer, or an audiophile, we have something for everyone.</p>
          <p className="text-justify mt-4 pr-10 leading-7 text-gray-600 dark:text-gray-300">Our team is dedicated to providing exceptional customer service, and we strive to make your shopping experience as seamless as possible. We believe that great sound should be accessible to everyone, and we work hard to offer competitive prices without compromising on quality.</p>
          <p className="text-justify mt-4 pr-10 leading-7 text-gray-600 dark:text-gray-300">Thank you for choosing AHeadphones. We look forward to helping you discover the perfect headphones that will elevate your music experience to new heights.</p>
          <p className="text-justify mt-4 text-gray-600 dark:text-gray-300">Happy listening!</p>
        </div>
      </div>
    </div>
  );
};

export default About