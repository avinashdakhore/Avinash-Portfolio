import codolioImg from "../assets/profileCard.png";

function GithubStats() {
  return (
    <section
      id="github"
      className="max-w-6xl mx-auto px-8 py-10"
    >
      <h2 className="text-4xl font-bold mb-12">
        GitHub Statistics
      </h2>

      {/* GitHub Stats */}
      <div
        className="
          float-card
          bg-gradient-to-r
          from-cyan-950/40
          to-emerald-950/40
          backdrop-blur-md
          p-8
          rounded-2xl
          border
          border-white/10
          flex
          justify-center
        "
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=avinashdakhore&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          className="rounded-xl"
        />
      </div>

    </section>
  );
}

export default GithubStats;