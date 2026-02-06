function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-900">Gyanaranjan</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Hi, I’m <span className="text-blue-600">Gyanaranjan Khatuа</span>
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          A passionate Web Developer focused on building modern, responsive, 
          and user-friendly web applications.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">About Me</h3>
        <p className="text-gray-600 leading-relaxed">
          I am a web developer who loves turning ideas into real-world web
          experiences. I enjoy working with modern frontend technologies and
          building clean, performant interfaces.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Skills</h3>
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
                className="bg-gray-50 border border-gray-200 py-3 rounded-lg text-center text-sm text-gray-700 hover:border-blue-400 hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h4 className="font-semibold mb-2 text-gray-900">Portfolio Website</h4>
            <p className="text-gray-600 text-sm">
              A personal portfolio built using React and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h4 className="font-semibold mb-2 text-gray-900">Web Application</h4>
            <p className="text-gray-600 text-sm">
              A responsive web app with clean UI and modern design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h3>
          <p className="text-gray-600 mb-6">
            Interested in working together or have a project in mind?
          </p>
          <p className="text-blue-600 font-medium text-lg">
            gyanaranjan@example.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t border-gray-200 text-sm text-gray-500">
        © {new Date().getFullYear()} Gyanaranjan Khatuа. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
