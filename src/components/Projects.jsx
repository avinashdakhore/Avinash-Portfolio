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
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-blue-500 transition">

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
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-blue-500 transition">

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