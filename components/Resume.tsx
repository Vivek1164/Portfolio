"use client";

import { useRef } from "react";
import { Download, Github, Mail, Phone, Linkedin } from "lucide-react";

const Resume = () => {
  const skills = {
    "Languages & Programming": ["JavaScript", "React.js", "Java", "SQL"],
    "Frameworks & Libraries": [
      "React.js",
      "Next.js",
      "Redux",
      "Node.js",
      "Express.js",
      "framer-motion",
    ],
    Databases: ["MongoDB"],
    "Cloud & DevOps": ["AWS", "Git", "CI/CD"],
    "Other Tools": ["VS Code", "Postman", "JIRA", "Google Sheets", "REST APIs"],
  };
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!printRef.current) return;

    const printWindow = window.open("", "_blank", "width=800,height=1000");
    if (!printWindow) return;

    const printContent = printRef.current.innerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Shivansh Raheja - Resume</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6; 
              color: #1f2937; 
              background: white;
              padding: 20px;
            }
            .resume-container { max-width: 800px; margin: 0 auto; }
            .header { border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px; }
            .name { font-size: 32px; font-weight: 700; color: #1f2937; margin-bottom: 8px; }
            .title { font-size: 18px; color: #3b82f6; font-weight: 600; margin-bottom: 12px; }
            .contact { font-size: 14px; color: #6b7280; line-height: 1.4; }
            .section { margin-bottom: 25px; }
            .section-title { 
              font-size: 20px; 
              font-weight: 700; 
              color: #1f2937; 
              border-bottom: 1px solid #e5e7eb; 
              padding-bottom: 5px; 
              margin-bottom: 15px; 
            }
            .job { margin-bottom: 20px; }
            .job-title { font-size: 16px; font-weight: 600; color: #1f2937; }
            .company { font-size: 15px; color: #3b82f6; font-weight: 500; }
            .duration { font-size: 13px; color: #6b7280; font-style: italic; }
            .job-details { margin-top: 8px; }
            .job-details ul { margin-left: 20px; }
            .job-details li { margin-bottom: 4px; font-size: 14px; color: #374151; }
            .project { margin-bottom: 15px; }
            .project-title { font-size: 15px; font-weight: 600; color: #1f2937; }
            .project-desc { font-size: 13px; color: #6b7280; margin-top: 2px; }
            .skills { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill-tag { 
              background: #f3f4f6; 
              color: #374151; 
              padding: 4px 12px; 
              border-radius: 20px; 
              font-size: 12px; 
              font-weight: 500; 
            }
            .grid-2 { display: grid; grid-template-columns: 1fr; gap: 30px; }
            @media (min-width: 1024px) {
              .grid-2 { grid-template-columns: 1fr 1fr; }
            }
            .summary { font-size: 14px; color: #374151; line-height: 1.6; }
            @media print { 
              body { padding: 0; }
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            ${printContent}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
              Resume
            </h2>
            <p className="text-gray-600">
              One-page printable resume generated from live content
            </p>
          </div>
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            // onClick={handlePrint}
            className="no-print inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>

        <div
          ref={printRef}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8 overflow-x-auto"
        >
          {/* Header */}
          <div className="header mb-8 text-gray-800">
            <div className="name font-bold text-xl">Vivek Kumar</div>
            <div className="title">Full Stack Developer</div>
            <div className="contact space-y-1">
              <div className=" flex justify-start items-center">
                <div className="flex items-center mr-4 gap-1">
                  <Mail className="inline-block w-4 h-4" />
                  vivekkumar1164@gmail.com
                </div>
                <div className="flex items-center">
                  <Phone className="inline-block w-4 h-4" />
                  +91-7503710648
                </div>
              </div>
              <div className=" flex justify-start items-center">
                <div className=" flex items-center gap-1 mr-4">
                  <Github className="inline-block w-4 h-4" />
                  github.com/Vivek1164
                </div>
                <div className=" flex items-center gap-1">
                  <Linkedin className="inline-block w-4 h-4" />
                  linkedin.com/in/vivek-kumar-a83b61254/
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="section">
            <div className="section-title text-xl font-bold text-gray-900 border-b pb-2 mb-4">
              Professional Summary
            </div>
            <p className="summary text-base leading-7 text-gray-700">
              Full-stack developer with 1.5 years of experience building
              scalable, responsive web applications and end-to-end SaaS
              solutions. Skilled in React.js, JavaScript, Node.js, MongoDB, and
              AWS, with experience in API development, cloud deployment,
              integrated testing, and CI/CD pipelines. Delivered
              production-ready features across multiple projects, integrating AI
              capabilities using Gemini for data processing, and intelligent
              workflows. Focused on clean architecture, performance
              optimization, and delivering user-centric solutions.
            </p>
          </div>

          {/* Experience & Projects */}
          <div className="section grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
            <div className="space-y-6">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">
                Professional Experience
              </div>

              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">
                  Full Stack Developer
                </div>
                <div className="company text-primary-600 font-medium">
                  Pixell
                </div>
                <div className="duration text-sm text-gray-500 italic">
                  12/2024 – Present | Faridabad, India
                </div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>
                      Developed responsive, high-performance UIs using
                      React/Next.js with Redux state management.
                    </li>
                    <li>
                      Optimized real-time data performance - reduced UI update
                      delays from 5s to 200ms (96% improvement) through API
                      synchronization.
                    </li>
                    <li>
                      Delivered full-stack MERN solutions (MongoDB, Express,
                      React, Node.js) from design to production deployment.
                    </li>
                    <li>
                      Enhanced code quality by collaborating on API contracts
                      and unit testing, preventing 80% of frontend bugs
                      pre-launch.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">
                  Prototype & Website Testing
                </div>
                <div className="company text-primary-600 font-medium">
                  Unified Mentor PVT Ltd.
                </div>
                <div className="duration text-sm text-gray-500 italic">
                  05/2024 – 11/2024 | Remote, India
                </div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>
                      Built responsive web interfaces using HTML5, CSS3, and
                      JavaScript and implementing design mockups with
                      cross-browser compatibility.
                    </li>
                    <li>
                      Product Quality and User Engagement Enhancement:
                      Identified and reported 100+ critical usability issues,
                      empowering development teams to enhance product quality,
                      resulting in an impressive 30% increase in user engagement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">
                Key Projects
              </div>

              <div className="project space-y-1">
                <div className="project-title font-semibold text-gray-900 flex items-center gap-2">
                  Pixell 
                  <a
                    href="https://pixell.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 italic hover:text-primary-600 transition-colors underline"
                  >
                    pixell.in
                  </a>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                  <li>
                    Developed responsive UI with Tailwind CSS & React.js,
                    achieving 80% mobile-friendliness and improving cross-device
                    user engagement.
                  </li>
                  <li>
                    Conducted unit testing on components and built scalable REST
                    APIs (Node.js, Express, MongoDB), cutting post-launch issues
                    by 30%.
                  </li>
                  <li>
                    Streamlined state management using Redux Toolkit and
                    optimized backend performance for future growth.
                  </li>
                </ul>
              </div>

              <div className="project space-y-1">
                <div className="project-title font-semibold text-gray-900 flex items-center gap-2">
                  Woof-Woof
                  <a
                    href="https://woof-wooff.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 italic hover:text-primary-600 transition-colors underline"
                  >
                    woof-wooff.vercel.app
                  </a>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                  <li>
                    Built Woof-Woof using Next.js, Redux, and Node.js with
                    MongoDB, implementing OTP authentication, role-based
                    dashboards, and REST APIs for secure pet product
                    transactions.
                  </li>
                  <li>
                    Designed scalable MongoDB schemas for 100+ products and
                    implemented secure JWT authentication, maintaining 99.9%
                    uptime for critical user/admin workflows.
                  </li>
                </ul>
              </div>

              <div className="project space-y-1">
                <div className="project-title font-semibold text-gray-900 flex items-center gap-2">
                  Vertex website
                  <a
                    href="https://capture-and-storage-web-application.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 italic hover:text-primary-600 transition-colors underline"
                  >
                    capture-and-storage-web-application
                  </a>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                  <li>
                    Developed Media Manager a MERN stack app showcasing React, Node.js,
                    Express, MongoDB, and JWT authentication for secure media handling.
                  </li>
                  <li>
                    Implemented Multer-based file upload system and integrated RESTful APIs
                    with Redux Toolkit for efficient state management and seamless UX.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Skills & Education */}
          <div className="section grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
            {/* Technical Skills */}
            <div className="section">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2 mb-3">
                Technical Skills
              </div>
              <div className="skills gap-2">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div
                    key={category}
                    className="mb-2 grid grid-cols-2 gap-2 whitespace-nowrap"
                  >
                    <div className="font-semibold text-gray-800 mb-1">
                      {category}
                      {":"}
                    </div>
                    <div className="flex flex-wrap">
                      {skillList.map((skill, index) => (
                        <span
                          key={skill}
                          className="skill-tag text-gray-700 mr-1"
                        >
                          {skill}
                          {index < skillList.length - 1 && ","}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Education */}
            <div className="space-y-2">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">
                Education
              </div>
              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">
                  Master of Computer Applications - Computer Science
                </div>
                <div className="company text-primary-600 font-medium">
                  J.C. Bose University of Science and Technology, YMCA
                </div>
                <div className="duration text-sm text-gray-500 italic">
                  06/2023 – 06/2025 | Faridabad, Haryana, India
                </div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>
                      <strong>CGPA:</strong> 7.2
                    </li>
                  </ul>
                </div>
              </div>
              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">
                  Bachelors of Science - Computer Science
                </div>
                <div className="company text-primary-600 font-medium">
                  J.C. Bose University of Science and Technology, YMCA
                </div>
                <div className="duration text-sm text-gray-500 italic">
                  06/2019 – 06/2022 | Faridabad, Haryana, India
                </div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>
                      <strong>CGPA:</strong> 7.2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Contact */}
          {/* <div className="section grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">
                Education
              </div>
              <div className="job space-y-1">
                <div className="job-title text-gray-900 font-semibold">
                  Master of Computer Applications - Computer Science
                </div>
                <div className="company text-primary-600 font-medium">
                  J.C. Bose University of Science and Technology, YMCA
                </div>
                <div className="duration text-sm text-gray-500 italic">
                  06/2023 – 06/2025 | Faridabad, Haryana, India
                </div>
                <div className="job-details">
                  <ul className="list-disc pl-5 space-y-1.5 leading-6 text-gray-700 text-[15px]">
                    <li>
                      <strong>CGPA:</strong> 7.2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="section-title text-xl font-bold text-gray-900 border-b pb-2">
                Availability
              </div>
              <p className="summary text-base leading-7 text-gray-700">
                Open to freelance and full-time opportunities. Available for
                remote work and willing to relocate for the right opportunity.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
