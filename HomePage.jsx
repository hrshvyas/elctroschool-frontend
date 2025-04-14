import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="ElctroSchool Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-blue-600">ElctroSchool</h1>
        </div>
        <div className="space-x-4">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-50">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold mb-4"
        >
          Learn, Grow, and Get Certified Online
        </motion.h2>
        <p className="text-lg text-gray-700 mb-6">
          Explore courses, gain skills, and get real-world experience.
        </p>
        <a href="/courses">
          <Button size="lg">Browse Courses</Button>
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Free & Paid Courses", description: "Access a variety of online courses across multiple subjects." },
          { title: "Virtual Internships", description: "Gain hands-on experience with real-world projects." },
          { title: "Certifications", description: "Earn recognized certificates upon course completion." },
        ].map((feature, index) => (
          <Card key={index} className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p className="text-gray-600">© 2025 ElctroSchool. All rights reserved.</p>
      </footer>
    </div>
  );
}
