function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>

      <div
        className="
          bg-white/5
          rounded-2xl
          p-8
          transition-all
          duration-300
          hover:translate-x-3
          hover:bg-white/10
          hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
        "
      >
      
      <p className="text-gray-300 text-lg leading-10 max-w-5xl text-justify">
        I am a B.Tech graduate in Information Technology from Walchand College
        of Engineering, Sangli, with a strong interest in Software Development,
        Artificial Intelligence, and Cloud Computing. I enjoy building scalable
        web applications and solving real-world problems through technology.
        
        My technical experience includes React, Node.js, MongoDB, MySQL, AWS,
        Docker, Python, and C++. Through various projects, I have gained
        hands-on experience in full-stack development, cloud-based deployments,
        and software engineering practices.

        I am passionate about learning new technologies, exploring AI-driven
        solutions, and continuously improving my problem-solving skills. I am
        currently seeking opportunities to contribute to impactful projects and
        grow as a Software Engineer.
      </p>
      </div>

      
    </section>
  );
}

export default About;