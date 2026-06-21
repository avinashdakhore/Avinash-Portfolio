function Education() {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">
        Education
      </h2>

      <div className="space-y-6">

        <div className="float-card bg-white/5 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">
            Walchand College of Engineering, Sangli
          </h3>

          <p className="text-gray-400 mt-2">
            B.Tech in Information Technology
          </p>

          <p className="text-gray-400">
            CGPA: 6.76 | Graduated: 2026
          </p>
        </div>

        <div className="float-card bg-white/5 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">
            Akola Arts, Commerce & Science Junior College, Akola
          </h3>

          <p className="text-gray-400 mt-2">
            Higher Secondary Education (12th)
          </p>

          <p className="text-gray-400">
            Percentage: 61.54% | Year: 2020
          </p>
        </div>

        <div className="float-card bg-white/5 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">
            Shri Gadge Maharaj Vidyalaya, Murtizapur
          </h3>

          <p className="text-gray-400 mt-2">
            Secondary Education (10th)
          </p>

          <p className="text-gray-400">
            Percentage: 78.80% | Year: 2018
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;