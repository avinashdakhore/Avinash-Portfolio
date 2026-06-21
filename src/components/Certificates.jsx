function Certificates() {
  const Certificates = [
    {
      title: "Red Hat Linux Fundamentals",
      issuer: "Red Hat Academy",
      description:
        "Completed RH104 Linux Fundamentals training covering Linux commands, file systems, users, permissions and shell operations.",
    },

    {
      title: "CUDA C/C++ Fundamentals",
      issuer: "NVIDIA",
      description:
        "Learned GPU programming using CUDA including kernels, memory management, thread synchronization and performance optimization.",
    },

    {
      title: "Ethical Hacking & Penetration Testing",
      issuer: "C-DAC Noida",
      description:
        "Completed Cyber Gyan training focused on ethical hacking, penetration testing, vulnerability assessment and cybersecurity fundamentals.",
    },

    {
      title: "Capture The Flag (CTF) - Top 5",
      issuer: "WLUG Metamorphosis",
      description:
        "Secured a Top 5 position in a cybersecurity competition involving Linux, networking, cryptography and problem-solving challenges.",
    },
  ];

  return (
    <section
      id="Certificates"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Certifications & Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Certificates.map((cert, index) => (
          <div
            key={index}
            className="
            float-card
            bg-white/5
            backdrop-blur-md
            p-8
            rounded-2xl
            border
            border-white/10
          "
          >
            <h3 className="text-2xl font-semibold mb-2">
              {cert.title}
            </h3>

            <p className="text-blue-400 mb-4">
              {cert.issuer}
            </p>

            <p className="text-gray-300">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;