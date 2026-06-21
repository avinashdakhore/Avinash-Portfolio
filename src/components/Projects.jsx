function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* SanDrop */}
        <div className="
      horizontal-float
      bg-white/5
      backdrop-blur-md
      p-5
      rounded-xl
      border
      border-white/10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:scale-105
      hover:border-cyan-400/50
      hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    ">

          <h3 className="text-2xl font-bold mb-4">
            SanDrop
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 px-3 py-1 rounded text-sm">
              React
            </span>

            <span className="bg-blue-600 px-3 py-1 rounded text-sm">
              Node.js
            </span>

            <span className="bg-blue-600 px-3 py-1 rounded text-sm">
              MongoDB
            </span>

            <span className="bg-blue-600 px-3 py-1 rounded text-sm">
              AWS
            </span>

            <span className="bg-blue-600 px-3 py-1 rounded text-sm">
              Docker
            </span>
          </div>

          <p className="text-gray-300 mb-4">
            Online file sharing platform supporting resumable uploads,
            AWS S3 storage, EC2 deployment, Docker containers and
            secure file access through unique access codes.
          </p>

          <a
            href="https://github.com/avinashdakhore"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            View Project →
          </a>

        </div>

        {/* ISL Detection */}
        <div className="
      horizontal-float
      bg-white/5
      backdrop-blur-md
      p-5
      rounded-xl
      border
      border-white/10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:scale-105
      hover:border-cyan-400/50
      hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    ">

          <h3 className="text-2xl font-bold mb-4">
            ISL Detection using CNN
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-600 px-3 py-1 rounded text-sm">
              Python
            </span>

            <span className="bg-purple-600 px-3 py-1 rounded text-sm">
              TensorFlow
            </span>

            <span className="bg-purple-600 px-3 py-1 rounded text-sm">
              OpenCV
            </span>

            <span className="bg-purple-600 px-3 py-1 rounded text-sm">
              CNN
            </span>
          </div>

          <p className="text-gray-300 mb-4">
            Indian Sign Language recognition system using
            Convolutional Neural Networks (CNN), TensorFlow
            and OpenCV for real-time gesture classification
            and communication assistance.
          </p>

          <a
            href="https://github.com/avinashdakhore"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            View Project →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;