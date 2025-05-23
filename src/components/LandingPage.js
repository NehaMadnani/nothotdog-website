// src/components/LandingPageDark.js

import React, { useState } from "react";
import Modal from "./Modal";
import RequestAccessForm from "./RequestAccessForm";
import Footer from "./Footer";

// Example image imports (adjust paths/names as needed)
import product from "../static/product-screen.png";
import logo from "../static/nothotdog.png";
import cloudflare from "../static/cloudflare-logo.png";
import skydeck from "../static/skydeck.jpg";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="NotHotDog Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-white">NotHotDog</span>
          </div>
          {/* CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full
                       hover:opacity-90 transition-opacity font-semibold"
          >
            Request Access
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-24 pb-32 flex flex-col lg:flex-row items-center container mx-auto px-4">
        {/* Left: Headings & CTA */}
        <div className="lg:w-1/2">
          <h2 className="text-lg uppercase tracking-wide text-purple-400 mb-2">
            Introducing NotHotDog
          </h2>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Simulation &amp; Evaluation <br />
            <span className="text-indigo-400">Platform for Your AI Agents</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            NotHotDog generates comprehensive scenarios and runs experiments on
            your AI agents in no time. Ship fast with confidence.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold 
                         hover:opacity-90 transition-opacity"
            >
              Request Early Access
            </button>
            <a
              href="https://calendly.com/nehasuresh/1-1-discussion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="border border-gray-600 text-white px-6 py-3 rounded-full font-bold 
                           hover:bg-gray-800 transition-colors"
              >
                Book a Demo
              </button>
            </a>
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src={product}
            alt="Product"
            className="max-w-full rounded-xl shadow-xl 
                       hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* 4-STEP PROCEDURE */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Simple 4-Step Procedure
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Use NotHotDog to launch quickly with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Connect",
                icon: "🔌",
                description: "Seamlessly integrate your agent with a single click."
              },
              {
                step: 2,
                title: "Generate",
                icon: "⚡",
                description: "Automatically create diverse, realistic test scenarios."
              },
              {
                step: 3,
                title: "Evaluate",
                icon: "🧑‍💻",
                description: "Analyze performance for strengths & weaknesses."
              },
              {
                step: 4,
                title: "Experiment",
                icon: "⚙️",
                description: "Continuously refine your agent for optimal reliability."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#181818] p-8 rounded-xl shadow hover:shadow-lg 
                           transition-shadow text-center"
              >
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center 
                                justify-center text-white text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR AI DEVELOPERS / FOR BUSINESSES */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#181818] text-white p-12 rounded-2xl shadow relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">For AI Developers</h3>
              <p className="text-gray-300 mb-8">Test and validate your AI agents with confidence.</p>
              <ul className="space-y-4 mb-8 text-gray-400">
                <li>◆ Connect & configure your agent quickly</li>
                <li>◆ Generate multiple test scenarios automatically</li>
                <li>◆ Run comprehensive simulations effortlessly</li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 
                           rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Request Early Access
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#181818] text-white p-12 rounded-2xl shadow relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="text-gray-300 mb-8">Ensure reliability in your AI deployments.</p>
              <ul className="space-y-4 mb-8 text-gray-400">
                <li>◆ Enter sample inputs & outputs</li>
                <li>◆ Validate agent behavior at scale</li>
                <li>◆ Achieve highest reliability scores</li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 
                           rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Request Early Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Backed By Industry Leaders</h2>
          <div className="flex justify-center items-center gap-12">
            <img
              src={cloudflare}
              alt="Cloudflare"
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src={skydeck}
              alt="SkyDeck"
              className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* MODAL (for Request Access) */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RequestAccessForm onClose={() => setIsModalOpen(false)} />
      </Modal>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
