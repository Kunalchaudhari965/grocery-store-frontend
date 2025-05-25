"use client";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Grocery Store</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Freshness Delivered. Trust Earned. Your neighborhood’s favorite grocery partner.
        </p>
      </section>

      {/* About Description */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are a local-first online grocery platform that believes in delivering
          the best quality produce and essentials at the fairest prices. Whether it’s
          farm-fresh vegetables, organic staples, or daily home needs – we source it
          with care and deliver it with commitment.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          To simplify grocery shopping by bringing convenience, affordability, and
          freshness to every household. We empower local farmers, support small vendors,
          and serve communities with honesty and heart.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To become the most loved and trusted grocery destination in India – blending
          technology, quality, and local impact.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="/icons/fresh.svg" alt="Fresh" className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-lg mb-2">Farm-Fresh Produce</h3>
            <p className="text-gray-600">Directly sourced from trusted farmers daily.</p>
          </div>
          <div>
            <img src="/icons/delivery.svg" alt="Fast Delivery" className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-lg mb-2">Quick Delivery</h3>
            <p className="text-gray-600">Lightning-fast delivery at your doorstep.</p>
          </div>
          <div>
            <img src="/icons/secure.svg" alt="Secure" className="mx-auto mb-4 h-12" />
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-600">100% secure checkout with multiple options.</p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="/images/founder.jpg"
              alt="Founder"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h4 className="font-semibold">Rohit Sharma</h4>
            <p className="text-gray-500 text-sm">Founder & CEO</p>
          </div>
          <div>
            <img
              src="/images/ops.jpg"
              alt="Operations"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h4 className="font-semibold">Anjali Mehta</h4>
            <p className="text-gray-500 text-sm">Operations Head</p>
          </div>
          <div>
            <img
              src="/images/dev.jpg"
              alt="Developer"
              className="w-24 h-24 mx-auto rounded-full mb-2"
            />
            <h4 className="font-semibold">Vikram Rao</h4>
            <p className="text-gray-500 text-sm">Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
