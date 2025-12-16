function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">Gyanaranjan</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Gyanaranjan Khatuа</span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-6">
          A passionate Web Developer focused on building modern, responsive, 
          and user-friendly web applications.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I am a web developer who loves turning ideas into real-world web
          experiences. I enjoy working with modern frontend technologies and
          building clean, performant interfaces.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "Responsive Design",
              "UI Development",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 py-3 rounded-lg text-center text-sm hover:bg-gray-700 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-2">Portfolio Website</h4>
            <p className="text-gray-400 text-sm">
              A personal portfolio built using React and Tailwind CSS.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-2">Web Application</h4>
            <p className="text-gray-400 text-sm">
              A responsive web app with clean UI and modern design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 mb-6">
            Interested in working together or have a project in mind?
          </p>
          <p className="text-blue-400 font-medium">
            gyanaranjan@example.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-sm text-gray-500">
        © {new Date().getFullYear()} Gyanaranjan Khatuа. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
