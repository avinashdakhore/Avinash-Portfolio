import profile from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Avinash Dakhore
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
            Aspiring Software Engineer
          </h2>

          <div
          className="
            mt-6
            max-w-3xl
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            p-3
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:border-cyan-400/50
            hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
          "
>
          <p className="text-gray-300 text-lg leading-8">
            Turning ideas into software solutions through Full-Stack Development,
            Artificial Intelligence, and Cloud Technologies. Passionate about
            problem-solving, innovation, and building products that create
            real-world impact.
          </p>
        </div>
           <br />
          <p className="text-gray-400 italic text-sm md:text-base mb-10 border-l-4 border-blue-500 pl-4">
            "Every project, every challenge, and every failure is a learning
            opportunity. The goal is not to know everything, but to keep
            growing and becoming better than yesterday."
            <br />
            <span className="text-blue-400">— Raj Shamani</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                group
                relative
                overflow-hidden
                bg-violet-600
                px-7 py-3
                rounded-lg
                flex items-center gap-2
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]
              "
            >
              <span className="relative z-10">Resume</span>

              <FaDownload
                size={16}
                className="
                  relative z-10
                  opacity-0
                  -translate-x-2
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300
                "
              />

              <span
                className="
                  absolute inset-0
                  bg-violet-500
                  -translate-x-full
                  group-hover:translate-x-0
                  transition-transform duration-500
                "
              ></span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/avinashdakhore"
              target="_blank"
              rel="noreferrer"
              className="
                border border-white
                px-6 py-3
                rounded-lg
                flex items-center justify-center
                transition-all duration-300
                hover:translate-x-2
                hover:bg-white
                hover:text-black
                hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]
              "
            >
              <FaGithub size={28} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/avinash-dakhore-4060b8258/"
              target="_blank"
              rel="noreferrer"
              className="
                border border-blue-500
                px-6 py-3
                rounded-lg
                flex items-center justify-center
                transition-all duration-300
                hover:translate-x-2
                hover:bg-blue-500
                hover:text-white
                hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]
              "
            >
              <FaLinkedin size={28} />
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Avinash Dakhore"
            className="
              w-80 h-80
              rounded-full
              object-cover
              border-4 border-blue-500
              shadow-[0_0_40px_rgba(59,130,246,0.6)]
              float-animation
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;