function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-10">
        Contact Me
      </h2>

      <div className="space-y-4 text-lg">

        <a
  href="mailto:avidakhore2020@gmail.com"
  className="text-blue-400 hover:underline"
>
  avidakhore2020@gmail.com
</a>

        <p>
          Phone No :
          9022551675
        </p>

        
        <a
  href="https://www.linkedin.com/in/avinash-dakhore-4060b8258/"
  target="_blank"
  rel="noreferrer"
  className="text-blue-400 hover:underline"
>
  LinkedIn Profile
</a>
<p></p>
 <a
  href="https://github.com/avinashdakhore"
  target="_blank"
  rel="noreferrer"
  className="text-blue-400 hover:underline"
>
  GitHub Profile
</a>


      </div>
    </section>
  );
}

export default Contact;