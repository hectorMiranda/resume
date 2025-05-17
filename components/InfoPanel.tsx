"use client"

interface InfoPanelProps {
  activeSection: string
  data: {
    about: {
      name: string
      title: string
      email: string
      phone: string
      location: string
      github: string
      linkedin: string
      summary: string
    }
    skills: Array<{ name: string; level: number; category: string }>
    projects: Array<{
      name: string
      description: string
      technologies: string[]
    }>
    experience: Array<{
      role: string
      company: string
      period: string
      description: string
      technologies: string[]
    }>
    education: Array<{
      institution: string
      degree: string
      period: string
      description: string
    }>
    achievements: Array<{
      title: string
      description: string
    }>
  }
}

export default function InfoPanel({ activeSection, data }: InfoPanelProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg text-white p-4 md:p-6 max-h-[45vh] overflow-y-auto border-t border-gray-800 shadow-lg transition-all duration-300 ease-in-out info-panel">
      <div className="max-w-7xl mx-auto">
        {activeSection === "about" && (
          <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">{data.about.name}</h2>
                <h3 className="text-xl text-blue-400 mb-4 font-light">{data.about.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{data.about.summary}</p>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-lg md:w-64 backdrop-blur-md border border-gray-800 shadow-xl">
                <h3 className="font-medium text-lg mb-3 text-blue-300">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-center">
                    <span className="text-gray-400 w-20">Email:</span>
                    <a href={`mailto:${data.about.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {data.about.email}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-gray-400 w-20">Phone:</span> 
                    <span>{data.about.phone}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-gray-400 w-20">Location:</span> 
                    <span>{data.about.location}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-gray-400 w-20">GitHub:</span>
                    <a
                      href={data.about.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {data.about.github.replace("https://", "")}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-gray-400 w-20">LinkedIn:</span>
                    <a
                      href={data.about.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {data.about.linkedin.replace("https://", "")}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Current Focus</h3>
              <div className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                <h4 className="font-medium text-white">Pasadena City College - Spring 2024 to Present</h4>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Currently enrolled at Pasadena City College, studying Robotics, Electronics, and Music Technology.
                  Coursework includes hands-on experience with microcontrollers, sensors, CAD tools, and 3D printing,
                  with a strong emphasis on integrating AI and Python-based control systems into robotics projects.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "skills" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                <h3 className="font-medium text-lg mb-3 text-blue-300">Frontend</h3>
                <ul className="space-y-3">
                  {data.skills
                    .filter((skill) => skill.category === "Frontend")
                    .map((skill) => (
                      <li key={skill.name} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span className="text-xs text-gray-400">{Math.round(skill.level * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level * 100}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                <h3 className="font-medium text-lg mb-3 text-blue-300">Backend</h3>
                <ul className="space-y-3">
                  {data.skills
                    .filter((skill) => skill.category === "Backend")
                    .map((skill) => (
                      <li key={skill.name} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span className="text-xs text-gray-400">{Math.round(skill.level * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level * 100}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                <h3 className="font-medium text-lg mb-3 text-blue-300">Real-Time & Infrastructure</h3>
                <ul className="space-y-3">
                  {data.skills
                    .filter(
                      (skill) =>
                        skill.category === "Real-Time" ||
                        skill.category === "Infrastructure" ||
                        skill.category === "DevOps",
                    )
                    .map((skill) => (
                      <li key={skill.name} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span className="text-xs text-gray-400">{Math.round(skill.level * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level * 100}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                <h3 className="font-medium text-lg mb-3 text-blue-300">Specialized Skills</h3>
                <ul className="space-y-3">
                  {data.skills
                    .filter(
                      (skill) =>
                        skill.category === "Specialized" ||
                        skill.category === "CAD" ||
                        skill.category === "Current Focus",
                    )
                    .map((skill) => (
                      <li key={skill.name} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span className="text-xs text-gray-400">{Math.round(skill.level * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level * 100}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Professional Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.role + exp.company} className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                    <span className="text-gray-400 text-sm mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <h4 className="text-blue-300 mb-3 font-medium">{exp.company}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded-full border border-blue-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Key Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map((project) => (
                <div key={project.name} className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl flex flex-col h-full">
                  <h3 className="font-bold text-xl mb-2 text-white">{project.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded-full border border-blue-800/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "education" && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Education</h2>
                <div className="space-y-4">
                  {data.education.map((edu) => (
                    <div key={edu.institution} className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-white">{edu.institution}</h3>
                          <p className="text-blue-300">{edu.degree}</p>
                        </div>
                        <span className="text-gray-400 text-sm mt-1 md:mt-0">{edu.period}</span>
                      </div>
                      {edu.description && <p className="text-gray-300 mt-2 leading-relaxed">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Achievements</h2>
                <div className="space-y-4">
                  {data.achievements.map((achievement) => (
                    <div key={achievement.title} className="bg-gray-900/70 p-5 rounded-lg backdrop-blur-md border border-gray-800 shadow-xl">
                      <h3 className="font-bold text-lg text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
