"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react";
import { recordProjectVisit, recordTechUsage } from "@/lib/analytics";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Woof-Woof",
      duration: "02/2025 – 05/2025",
      description:
        "A full-stack e-commerce platform for pet accessories featuring responsive UI, secure APIs, real-time inventory, and seamless shopping experience.",
      impact:
        "Reduced content update cycles by 70% with a full-featured Admin Panel and CI/CD",
      features: [
        "Admin Panel for blogs, reviews, products, clients, quizzes, orders, payments",
        "Vercel hosting with Cloudinary and caching",
        "CI/CD with GitHub Actions for zero-downtime deployments",
        "SEO-friendly pages and sitemap",
        "Responsive design",
      ],
      technologies: [
        "Next.js",
        "MongoDB",
        "Cloudinary",
        "GitHub Actions",
        "Tailwind CSS",
        "Framer Motion",
      ],
      image: "/api/placeholder/600/400",
      github: "",
      live: "https://woof-wooff.vercel.app/",
      status: "Live",
    },
    {
      title: "Pixell",
      duration: "12/2024 – Present",
      description:
        "A retail branding platform that enables Brands to manage, and deploy cohesive brand identities and storefront experiences across web and social channels. Features real-time installation image viewing, in-store signage reports, and a centralized branding hub.",
      impact:
        "Accelerated time-to-market for new store concepts and improved brand consistency, increasing conversion and average order value for pilot retailers",
      features: [
        "Centralized management of installation reports and creative signages",
        "Brand kit builder (logos, colors, typography) with reusable asset templates",
        "Real-time installation image gallery and in-store signage reporting",
        "Storefront themes with live preview and A/B testing capabilities",
        "Marketing campaign templates and scheduled promotions",
        "Analytics dashboard for brand performance and conversion tracking",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Third-party APIs",
        "AWS",
        "Stripe",
      ],
      image: "/api/placeholder/600/400",
      github: "",
      live: "https://pixell.in/",
      status: "LIVE",
    },
    {
      title: "Media Manager",
      duration: "06/2024",
      description:
        "A MERN stack application showcasing skills in React, Node.js, Express, MongoDB, and JWT authentication for secure media handling. Features a Multer-based file upload system and RESTful APIs with Redux Toolkit for efficient state management.",
      impact:
        "Demonstrates full-stack development capabilities with secure authentication, scalable architecture, and seamless user experience for media management",
      features: [
        "JWT authentication for secure user access and token-based session management",
        "Multer-based file upload system with media validation",
        "RESTful APIs for CRUD operations on media files",
        "Redux Toolkit state management for efficient data flow",
        "Responsive UI with React.js and modern styling",
        "MongoDB database for persistent media storage",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "JWT",
        "Multer",
        "Vercel",
      ],
      image: "/api/placeholder/600/400",
      github: "",
      live: "https://capture-and-storage-web-application.vercel.app/",
      status: "LIVE",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Freelance Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real-world solutions that deliver measurable impact
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${index === 0 ? "lg:col-span-2 lg:max-w-3xl lg:mx-auto" : ""} bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <Users className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">
                        Impact
                      </h4>
                      <p className="text-green-700 text-sm">{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: 0.5 + index * 0.3 + featureIndex * 0.05,
                        }}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          delay: 0.7 + index * 0.3 + techIndex * 0.05,
                        }}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      recordProjectVisit(project.title);
                      recordTechUsage(project.technologies);
                    }}
                    className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
