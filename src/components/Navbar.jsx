function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-white text-xl font-bold">
          Avinash Dakhore
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <li>
 <a
  href="#about"
  className="
    relative
    after:absolute
    after:left-0
    after:bottom-[-4px]
    after:w-0
    after:h-[2px]
    after:bg-violet-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  About
</a>
</li>

<li>
  <a
    href="#skills"
    className="hover:text-blue-400 transition"
  >
    Skills
  </a>
</li>

<li>
  <a
    href="#projects"
    className="hover:text-blue-400 transition"
  >
    Projects
  </a>
</li>

<li>
  <a
    href="#contact"
    className="hover:text-blue-400 transition"
  >
    Contact
  </a>
</li>
        </ul>

      </div>

    </nav>
  );
}

export default Navbar;