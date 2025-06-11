import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Brain, Database, Cloud, Star, ExternalLink, Menu, X, Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import leader from '../assets/leader.png'
const BlogWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (isVisible.about) {
      const clientTimer = setInterval(() => {
        setClientCount(prev => prev < 25 ? prev + 1 : 25);
      }, 80);
      
      const projectTimer = setInterval(() => {
        setProjectCount(prev => prev < 30 ? prev + 1 : 30);
      }, 60);
      
      const expTimer = setInterval(() => {
        setExperienceYears(prev => prev < 2 ? prev + 0.1 : 2);
      }, 100);

      return () => {
        clearInterval(clientTimer);
        clearInterval(projectTimer);
        clearInterval(expTimer);
      };
    }
  }, [isVisible.about]);

  const projects = [
    {
      title: "Fashnix",
      tech: "MERN & Python",
      description: "E-commerce website for clothing with ML-based dynamic pricing and personalized recommendations. Features admin management and user shopping experience.",
      github: "https://github.com/malikmoaz01/Fashnix-FYP",
      live: "https://fashnixx.vercel.app/",
      featured: true
    },
    {
      title: "Face Insight App",
      tech: "Django",
      description: "Deep learning app that predicts gender, age, and skin diseases. Provides NLP-based suggestions and GPT2 integration for enhanced recommendations.",
      github: "https://github.com/malikmoaz01/FaceInsight-Deep-Learning"
    },
    {
      title: "Insta Backend",
      tech: "MERN",
      description: "Instagram clone with complete backend functionality including user management, posts, likes, comments, follow system, and search.",
      github: "https://github.com/malikmoaz01/Insta-Backend-MERN"
    },
    {
      title: "E-Restaurant",
      tech: "MERN",
      description: "Complete restaurant management system with customer service, staff management, financial tracking, and inventory control.",
      github: "https://github.com/malikmoaz01/Restuarant-Reactjs"
    },
    {
      title: "Recipe Generator",
      tech: "Django",
      description: "ML-powered recipe generator that analyzes dish images using CNNs and provides recipe suggestions through NLP.",
      github: "https://github.com/malikmoaz01/Recipe-Generator"
    }
  ];

  const skills = [
    { category: "Programming", items: ["C/C++", "Java", "JavaScript", "Python"], icon: Code },
    { category: "Machine Learning", items: ["CNN", "NLP", "TensorFlow", "NumPy"], icon: Brain },
    { category: "Web Development", items: ["MERN", "Flask", "Django", "Next.js"], icon: Database },
    { category: "Deployment", items: ["Docker", "Railway", "AWS", "Render"], icon: Cloud }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: clientCount, suffix: "+" },
    { icon: Briefcase, label: "Projects Completed", value: projectCount, suffix: "+" },
    { icon: Award, label: "Years Experience", value: experienceYears.toFixed(1), suffix: "" },
    { icon: TrendingUp, label: "Success Rate", value: "98", suffix: "%" }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 transform rotate-45 animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-yellow-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-yellow-500 transform rotate-45 animate-bounce animation-delay-1000 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-yellow-400 rounded-full animate-pulse animation-delay-3000 opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Malik Moaz
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-yellow-500/20 hover:text-yellow-400 ${
                      activeSection === item ? 'text-yellow-400 bg-yellow-500/20 border-b-2 border-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-yellow-400 p-2 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/20 w-full text-left transition-all duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-start transition-all duration-1000 ${isVisible.home ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur-xl opacity-30 animate-spin slow-spin"></div>
                <img 
                  src= "/assets/leader.png"
                  alt="Malik Moaz"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-3 rounded-full shadow-lg animate-bounce">
                  <Star size={24} className="fill-current" />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible.home ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Malik Moaz
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-yellow-300 mb-6 font-semibold">
                Software Engineer
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Leveraging expertise in Machine Learning and Web Development to create innovative, 
                data-driven applications that enhance user experiences and drive business growth.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full">
                  <MapPin size={18} className="text-yellow-400" />
                  <span>Lahore, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Phone size={18} className="text-yellow-400" />
                  <span>+92 305 5865381</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="mailto:mlkmoaz01@gmail.com"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                >
                  Get In Touch
                </a>
                <a 
                  href="https://github.com/malikmoaz01"
                  className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-400 hover:border-yellow-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-y border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full mb-4 shadow-lg">
                    <IconComponent size={32} />
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-6 rounded-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Science - Software Engineering</h4>
                    <p className="text-yellow-400 mb-2 font-medium">Faculty of Computing & IT (PU)</p>
                    <p className="text-gray-400 mb-2">Nov 2021 – June 2025</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <p className="text-green-400 font-semibold">Percentage: 81.5%</p>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <h4 className="text-xl font-semibold text-white mb-2">FSC - Pre Engineering</h4>
                    <p className="text-yellow-400 mb-2 font-medium">PGC Campus 8 (Main)</p>
                    <p className="text-gray-400 mb-2">Jan 2019 – Nov 2021</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <p className="text-green-400 font-semibold">Percentage: 99.82%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Professional Experience</h3>
                <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-semibold text-white">MERN & AI Junior Developer</h4>
                  </div>
                  <p className="text-yellow-400 mb-2 font-medium">Vast, Lahore, Pakistan</p>
                  <p className="text-gray-400 mb-4">August 2022 – August 2023</p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Solution of Front End Development using ReactJS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Solution of Backend Problems using different technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Usage of Python libraries (TensorFlow, NumPy, etc.)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 ${
                    project.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-yellow-500/30' : ''
                  }`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      {project.featured && (
                        <div className="bg-yellow-500 text-black p-1 rounded-full">
                          <Star className="fill-current" size={16} />
                        </div>
                      )}
                    </div>
                    <div className="inline-block bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mb-3 border border-yellow-500/30">
                      {project.tech}
                    </div>
                    <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.live && (
                        <a 
                          href={project.live}
                          className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div 
                    key={skillGroup.category}
                    className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-500 text-black p-2 rounded-lg mr-3 shadow-md">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-600/30 hover:bg-yellow-600/30 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you want to collaborate or just say hello, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:mlkmoaz01@gmail.com"
                      className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-3 rounded-lg hover:bg-yellow-500/10"
                    >
                      <div className="bg-yellow-500 text-black p-2 rounded-lg">
                        <Mail size={20} />
                      </div>
                      <span>mlkmoaz01@gmail.com</span>
                    </a>
                    <a 
                      href="tel:+923055865381"
                      className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-3 rounded-lg hover:bg-yellow-500/10"
                    >
                      <div className="bg-yellow-500 text-black p-2 rounded-lg">
                        <Phone size={20} />
                      </div>
                      <span>+92 305 5865381</span>
                    </a>
                    <div className="flex items-center gap-4 text-gray-300 p-3 rounded-lg">
                      <div className="bg-yellow-500 text-black p-2 rounded-lg">
                        <MapPin size={20} />
                      </div>
                      <span>Lahore, Punjab, Pakistan</span>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-8">
                    <a 
                      href="https://github.com/malikmoaz01"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                    >
                      <Github size={32} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/malik-moaz-735911247"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
                    >
                      <Linkedin size={32} />
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://leetcode.com/u/mlkmoaz01/"
                      className="block bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-md transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-500"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">LeetCode Profile</span>
                        <ExternalLink size={16} className="text-yellow-400" />
                      </div>
                      <p className="text-gray-400 text-sm mt-1">Problem Solving Excellence</p>
                    </a>
                    <a 
                      href="https://pucon.vercel.app/"
                      className="block bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-md transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-500"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">PUCON Website</span>
                        <ExternalLink size={16} className="text-yellow-400" />
                      </div>
                      <p className="text-gray-400 text-sm mt-1">PUCIT Competition Platform</p>
                    </a>
                    <a 
                      href="https://github.com/malikmoaz01/Mini-Projects"
                      className="block bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-md transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center justify-between">
                        <span>Mini Projects</span>
                        <ExternalLink size={16} />
                      </div>
                      <p className="text-gray-400 text-sm mt-1">Collection of Various Projects</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Malik Moaz. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogWebsite;