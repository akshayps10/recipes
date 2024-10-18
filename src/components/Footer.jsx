import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-blue-500 to-green-200 to-pink-500 text-white py-10  mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
    
        <div className="mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="mr-2">🍔</span> RECIPE VILLA
          </h2>
          <p className="mt-4">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ratione excepturi quibusdam. Laudantium adipisci in qui quidem facilis ullam repellendus, quasi doloremque dolorum, iure eaque provident alias debitis? Minima, quisquam?
          </p>
          <p>Code by me.</p>
          
        </div>

 
        <div className="mb-6">
          <h3 className="font-bold">Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Recipes</a></li>
            <li><a href="#" className="hover:underline">Special items</a></li>
          </ul>
        </div>

      
        <div className="mb-6">
          <h3 className="font-bold">FAQ</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Address</a></li>
            <li><a href="#" className="hover:underline">email</a></li>
            <li><a href="#" className="hover:underline">map</a></li>
          </ul>
        </div>

      
        <div className="mb-6">
          <h3 className="font-bold">Contact Us</h3>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your Mail"
              className="p-2 rounded-l-lg text-black"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-r-lg"
            >
              ➔
            </button>
          </form>
          <div className="mt-4 flex space-x-4">
            
            <a href="#" className="hover:opacity-75"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:opacity-75"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:opacity-75"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:opacity-75"><i className="fas fa-envelope"></i></a>
            <a href="#" className="hover:opacity-75"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="hover:opacity-75"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        Copyright © 2024 RECIPE VILLA LUMINAR TEST
      </div>
    </footer>
  );
};

export default Footer;
