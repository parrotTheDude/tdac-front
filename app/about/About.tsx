"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="w-full max-w-3xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800">About TAURA</h1>
        <p className="text-gray-600 mt-2">SOUL-FUELED | SPIRIT-DRIVEN</p>

        {/* Image (Optional) */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/taura.webp" // Ensure this exists in the public folder
            alt="Taura Logo"
            width={200}
            height={200}
            className="rounded-lg"
            unoptimized
          />
        </div>

        {/* About Content */}
        <section className="mt-6 text-gray-700 leading-relaxed">
          <p>
            TAURA is more than just a brand—it's a movement. Our mission is to empower, inspire,
            and create a space where authenticity thrives. Rooted in creativity, driven by passion,
            and fueled by community, we aim to leave a lasting impact.
          </p>

          <p className="mt-4">
            Whether it's through art, fashion, or meaningful collaborations, TAURA represents a
            lifestyle that embraces individuality while uniting people through shared experiences.
          </p>
        </section>

        {/* Team Section (Optional) */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
          <p className="text-gray-600">A group of passionate individuals bringing TAURA to life.</p>

          <div className="mt-6 flex justify-center space-x-6">
            {/* Example team member placeholders */}
            <div className="flex flex-col items-center">
              <Image
                src="/team1.jpg" // Replace with real image
                alt="Team Member 1"
                width={80}
                height={80}
                className="rounded-full"
                unoptimized
              />
              <p className="text-gray-700 mt-2 text-sm font-medium">Alex Doe</p>
              <p className="text-gray-500 text-xs">Founder</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/team2.jpg" // Replace with real image
                alt="Team Member 2"
                width={80}
                height={80}
                className="rounded-full"
                unoptimized
              />
              <p className="text-gray-700 mt-2 text-sm font-medium">Jamie Lee</p>
              <p className="text-gray-500 text-xs">Creative Director</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}