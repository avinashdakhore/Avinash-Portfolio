function GithubStats() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-12">
        GitHub Statistics
      </h2>

      <div className="flex justify-center">
        <img
          src="https://github-readme-stats.vercel.app/api?username=avinashdakhore&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />
      </div>
    </section>
  );
}

export default GithubStats;