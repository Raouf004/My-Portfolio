import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Palette, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 95, icon: Code },
    { name: 'React.js', level: 90, icon: Code },
    { name: 'Node.js', level: 85, icon: Code },
    { name: 'CSS/Tailwind', level: 92, icon: Palette },
    { name: 'Responsive Design', level: 88, icon: Smartphone },
    { name: 'Web APIs', level: 80, icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Me
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-6 leading-relaxed"
            >
              I'm a passionate web developer with over 3 years of experience creating 
              digital experiences that combine beautiful design with robust functionality. 
              I specialize in modern web technologies and have a keen eye for detail.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in writing clean, maintainable code 
              and creating user experiences that make a difference.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-slate-900 mb-8"
            >
              Technical Skills
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <IconComponent className="text-blue-500 mr-2" size={20} />
                        <span className="font-semibold text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-slate-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-500">50+</div>
                <div className="text-slate-600 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-cyan-500">3+</div>
                <div className="text-slate-600 text-sm">Years Exp.</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-500">100%</div>
                <div className="text-slate-600 text-sm">Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

