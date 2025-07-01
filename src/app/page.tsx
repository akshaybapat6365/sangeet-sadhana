'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <Image
            src="/primary.png"
            alt="Devi Saraswati"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-transparent to-warm-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center"
        >
          <div className="mb-8">
            <Image
              src="/logo.jpg"
              alt="Smaarth Sangeet Sadhana Logo"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
            Smaarth Sangeet Sadhana
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the joy of music and unlock your creative potential.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">About the Classes</h2>
              <p className="text-gray-400 mb-4">
                Our classes offer a unique blend of traditional and contemporary music education. We provide a nurturing environment where students of all ages can explore their musical talents.
              </p>
              <p className="text-gray-400">
                Whether you are a beginner or an experienced musician, our curriculum is designed to help you achieve your goals.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/primary.png"
                alt="Music Class"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Ready to start your musical journey? Contact us today!
          </p>
          <a
            href="mailto:info@samarthsangeetsadhana.com"
            className="bg-primary-orange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}