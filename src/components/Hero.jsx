import profile from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Avinash Dakhore
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
            Aspiring Software Engineer
          </h2>

          <p className="text-gray-300 mb-8">
            Graduated B.Tech Information Technology student with strong
            problem-solving skills and experience building full-stack web
            applications using React, Node.js, MongoDB, AWS and Docker.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/avinashdakhore"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition flex items-center justify-center"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/avinash-dakhore-4060b8258/"
              target="_blank"
              rel="noreferrer"
              className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition flex items-center justify-center"
            >
              <FaLinkedin size={28} />
            </a>

          </div>

        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Avinash Dakhore"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;