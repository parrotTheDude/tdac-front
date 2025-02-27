"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Placeholder for form submission logic (e.g., API call)
    setTimeout(() => {
      alert("Message sent successfully!");
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mt-2">
          We'd love to hear from you. Fill out the form below and we'll get back to you!
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
            disabled={submitted}
          >
            {submitted ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}