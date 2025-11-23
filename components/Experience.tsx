"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Building2,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Pixell",
      role: "Full Stack Developer",
      duration: "12/2024 – Present",
      location: "Faridabad, Haryana, India",
      type: "Full-time",
      link: "https://Pixell.in",
      description:
        "Building and scaling a multi-tenant SaaS accreditation platform with secure, reliable infrastructure and modern web technologies.",
      achievements: [
        "Contributed to building a vendor-focused operations portal where vendors can view and manage their tasks through a clean, unified interface.",
        "Assisted in writing integrated tests across different modules and implemented a weekly cron job to automate campaign progress report generation.",
        "Developed reusable UI components and shared modules to support faster development and maintain consistent design across the platform.",
        "Supported the implementation of RBAC for 50+ users and contributed to real-time dashboard features that improved decision-making speed by 40%.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "AWS",
        "Testing",
      ],
    },
    {
      company: " Unified Mentor PVT Ltd.",
      role: " Frontend Developer",
      duration: "05/2021 – 11/2024",
      location: "Work from Home, India",
      type: "Contract",
      link: "https://www.unifiedmentor.com/",
      description:
        "Led usability assessments and provided actionable UX insights across web and mobile applications.",
      achievements: [
        "Developed reusable, responsive React components using CSS (Flexbox, Grid, and media queries) to design accessible, mobile-first pages.",
        "User Experience and Usability Analysis: Assessed and provided feedback on 10+ websites and mobile applications, ensuring optimal experiences across diverse platforms.",
        "Product Quality and User Engagement Enhancement: Identified and reported 100+ critical usability issues, enabling teams to enhance quality and achieve a 30% increase in user engagement.",
      ],
      technologies: ["API testing", "JavaScript", "CSS", "Quality Assurance"],
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
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
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Building impactful solutions and gaining valuable experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row md:items-start md:space-x-8 space-y-4 md:space-y-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full shadow-lg z-10">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 text-primary-600 mb-2">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-5 h-5" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        {"link" in exp && exp.link && (
                          <a
                            href={(exp as any).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-4"
                          >
                            Visit <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Resonsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            delay: 0.5 + index * 0.3 + achIndex * 0.1,
                          }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
