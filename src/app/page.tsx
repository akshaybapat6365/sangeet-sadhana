'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-white text-dark-brown font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/primary.png"
            alt="Devi Saraswati"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-white via-transparent to-cream-white" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <Image
              src="/logo.jpg"
              alt="Smaarth Sangeet Sadhana Logo"
              width={180}
              height={180}
              className="rounded-full shadow-lg border-4 border-saffron-gold"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-saffron-gold ring-opacity-50 animate-pulse" />
          </motion.div>
          <h1 className="text-7xl font-serif font-extrabold tracking-tight text-maroon-primary sm:text-8xl md:text-9xl leading-tight">
            Smaarth Sangeet Sadhana
          </h1>
          <p className="mt-6 text-xl text-dark-brown max-w-3xl mx-auto font-serif italic">
            "Where every note resonates with the soul of Indian Classical Music."
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-maroon-primary text-cream-white">
        <div className="container mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-serif font-bold mb-12 text-center text-saffron-gold"
          >
            Our Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                At Smaarth Sangeet Sadhana, we believe that music is a spiritual journey. Our classes are designed to impart not just technical skills, but also a deep understanding and appreciation for the rich heritage of Indian Classical Music.
              </p>
              <p className="text-lg leading-relaxed">
                We foster a nurturing environment where students can connect with the essence of ragas and talas, allowing their inner musicality to blossom.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/primary.png"
                alt="Music Class"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark-brown opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream-white text-dark-brown">
        <div className="container mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-serif font-bold mb-12 text-saffron-gold"
          >
            Join Our Musical Journey
          </motion.h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to immerse yourself in the world of Indian Classical Music? Contact us today to learn more about our classes and enrollment.
          </p>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="mailto:info@samarthsangeetsadhana.com"
            className="inline-block bg-saffron-gold text-maroon-primary font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Inquire Now
          </motion.a>
        </div>
      </section>
    </main>
  );
}
